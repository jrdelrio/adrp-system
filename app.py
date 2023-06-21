from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Example data
clients = [
    {
      "id": 1,
      "name": "John Doe",
      "email": "johndoe@example.com",
      "address": "123 Main St",
      "phone": "+1 123-456-7890",
      "comuna": "Las Condes"
    },
    {
      "id": 2,
      "name": "Jane Smith",
      "email": "janesmith@example.com",
      "address": "456 Elm St",
      "phone": "+1 234-567-8901",
      "comuna": "Providencia"
    },
    {
      "id": 3,
      "name": "Michael Johnson",
      "email": "michaeljohnson@example.com",
      "address": "789 Oak St",
      "phone": "+1 345-678-9012",
      "comuna": "Vitacura"
    },
    {
      "id": 4,
      "name": "Emily Davis",
      "email": "emilydavis@example.com",
      "address": "321 Pine St",
      "phone": "+1 456-789-0123",
      "comuna": "Ñuñoa"
    },
    {
      "id": 5,
      "name": "William Rodriguez",
      "email": "williamrodriguez@example.com",
      "address": "654 Maple St",
      "phone": "+1 567-890-1234",
      "comuna": "La Reina"
    },
    {
      "id": 6,
      "name": "Sophia Martinez",
      "email": "sophiamartinez@example.com",
      "address": "987 Cedar St",
      "phone": "+1 678-901-2345",
      "comuna": "La Florida"
    },
    {
      "id": 7,
      "name": "James Wilson",
      "email": "jameswilson@example.com",
      "address": "135 Walnut St",
      "phone": "+1 789-012-3456",
      "comuna": "Providencia"
    },
    {
      "id": 8,
      "name": "Olivia Taylor",
      "email": "oliviataylor@example.com",
      "address": "246 Birch St",
      "phone": "+1 890-123-4567",
      "comuna": "Las Condes"
    },
    {
      "id": 9,
      "name": "Liam Anderson",
      "email": "liamanderson@example.com",
      "address": "579 Chestnut St",
      "phone": "+1 901-234-5678",
      "comuna": "Vitacura"
    },
    {
      "id": 10,
      "name": "Ava Thomas",
      "email": "avathomas@example.com",
      "address": "791 Sycamore St",
      "phone": "+1 012-345-6789",
      "comuna": "La Reina"
    },
    {
      "id": 11,
      "name": "Benjamin Garcia",
      "email": "benjamingarcia@example.com",
      "address": "234 Cedar St",
      "phone": "+1 123-456-7890",
      "comuna": "Ñuñoa"
    },
    {
      "id": 12,
      "name": "Mia Martinez",
      "email": "miamartinez@example.com",
      "address": "567 Pine St",
      "phone": "+1 234-567-8901",
      "comuna": "La Florida"
    },
    {
      "id": 13,
      "name": "Ethan Brown",
      "email": "ethanbrown@example.com",
      "address": "890 Elm St",
      "phone": "+1 345-678-9012"
    },
    {
      "id": 14,
      "name": "Sophie Johnson",
      "email": "sophiejohnson@example.com",
      "address": "678 Oak St",
      "phone": "+1 456-789-0123",
      "comuna": "Las Condes"
    },
    {
      "id": 15,
      "name": "Jacob Wilson",
      "email": "jacobwilson@example.com",
      "address": "901 Elm St",
      "phone": "+1 567-890-1234",
      "comuna": "Providencia"
    },
    {
      "id": 16,
      "name": "Emma Davis",
      "email": "emmadavis@example.com",
      "address": "234 Pine St",
      "phone": "+1 678-901-2345",
      "comuna": "Vitacura"
    },
    {
      "id": 17,
      "name": "Noah Thomas",
      "email": "noahthomas@example.com",
      "address": "567 Oak St",
      "phone": "+1 789-012-3456",
      "comuna": "La Reina"
    },
    {
      "id": 18,
      "name": "Isabella Anderson",
      "email": "isabellaanderson@example.com",
      "address": "890 Pine St",
      "phone": "+1 890-123-4567",
      "comuna": "Las Condes"
    }
  ]

# API endpoint to get all todos
@app.route('/api/clients', methods=['GET'])
def get_clients():
    return print('holi'), 200
    # return jsonify(clients)

# # API endpoint to create a new todo
# @app.route('/api/clients', methods=['POST'])
# def create_client():
#     new_client = {
#       "id": 13,
#       "name": "Ethan Brown",
#       "email": "ethanbrown@example.com",
#       "address": "890 Elm St",
#       "phone": "+1 345-678-9012"
#     }
#     todos.append(new_todo)
#     return jsonify(new_todo), 201

# # API endpoint to get a specific todo by ID
# @app.route('/api/todos/<int:todo_id>', methods=['GET'])
# def get_todo(todo_id):
#     todo = next((t for t in todos if t['id'] == todo_id), None)
#     if todo:
#         return jsonify(todo)
#     else:
#         return jsonify(error="Todo not found"), 404

# # API endpoint to update the completion status of a todo
# @app.route('/api/todos/<int:todo_id>', methods=['PUT'])
# def update_todo(todo_id):
#     todo = next((t for t in todos if t['id'] == todo_id), None)
#     if todo:
#         todo['completed'] = request.json.get('completed')
#         return jsonify(todo)
#     else:
#         return jsonify(error="Todo not found"), 404

# # API endpoint to delete a todo
# @app.route('/api/todos/<int:todo_id>', methods=['DELETE'])
# def delete_todo(todo_id):
#     todo = next((t for t in todos if t['id'] == todo_id), None)
#     if todo:
#         todos.remove(todo)
#         return jsonify(message="Todo deleted")
#     else:
#         return jsonify(error="Todo not found"), 404

# if __name__ == '__main__':
#     app.run()
