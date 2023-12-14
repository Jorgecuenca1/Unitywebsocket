import websocket

def send_message(message):
    ws = websocket.WebSocket()
    ws.connect("ws://localhost:8080")
    ws.send(message)
    ws.close()

while True:
    message = input("Comando para mover (puede ser L, R, B, F): ")
    if message.lower() == 'salir':
        break
    send_message(message)
