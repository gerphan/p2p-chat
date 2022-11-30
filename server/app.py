from flask import Flask
from flask_restful import Resource, Api
import asyncio
import websockets
import logging as log

app = Flask(__name__)
api = Api(app)
loops = dict()
servers = dict()

async def chat(websocket, path):
    async for message in websocket:
        log.warning(f"New message: '{str(message)}'")
        await websocket.send(message)


class WebsocketCreator(Resource):

    def post(self, port='1011'):
        loop = asyncio.new_event_loop()
        asyncio.set_event_loop(loop)
        start_server = websockets.serve(chat, port=port)
        servers[port] = start_server.ws_server
        log.warning(f"Started ws server on port {port}")
        loop.run_until_complete(start_server)
        loops[port] = loop
        loop.run_forever()
        loop.close()

    def delete(self, port='1011'):
        if port in servers.keys():
            servers[port].close()
            log.warning(f"Closed ws server on port {port}")
            loops[port].stop()
            loops.pop(port)
            servers.pop(port)
            return True
        else:
            return False


api.add_resource(WebsocketCreator, "/creator/<port>")
app.run()
