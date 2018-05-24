/**
 * @name Todos Spécification des routes pour accéder à la gestion des tâches
 */

 var express = require('express');
 var router = express.Router();
 var Todo = require('../models/Todos');

router.get(
    '/:id?',
    function(request, response, next) {
        // Fonction appelée après décodage de l'URI (http://localhost:3000/19)

        if (request.params.id) {
            // Un paramètre est passé
            Todo.getTodoById(request.params.id, function(err, rows) {
                if (err) {
                    response.json(err);
                } else {
                    response.json(rows);
                }
            });
        } else {
            Todo.getAllTodos(function(err, rows) {
                if (err) {
                    response.json(err);
                } else {
                    response.json(rows);
                }
            });
        }
    }
);

/**
 * POST : ajouter une ligne de todo
 */
router.post('', function(request, response, next) {
    Todo.addTodo(request.body, function(err, count){
        if (err) {
            response.json(err);
        } else {
            // Récupère la dernière ligne ajoutée
            Todo.getLastTodo(function(err, row) {
                if (err) {
                    response.json(err);
                } else {
                    response.json(row);
                }
            });
        }
    });
});

router.put('/:id', function(request, response, next) {
    Todo.updateTodo(request.params.id, request.body, function(err, row) {
        if (err) {
            response.json(err);
        } else {
            request.body.id = request.params.id;
            response.json(request.body);
        }
    })
});

router.delete('/:id', function(request, response, next) {
    Todo.deleteTodo(request.params.id, function(err, count) {
        if (err) {
            response.json(err);
        } else {
            response.json(request.params.id);
        }
    })
});



module.exports = router;