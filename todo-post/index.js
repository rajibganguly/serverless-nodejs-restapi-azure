const todoService = require('../services/todo');

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    if (req.body && req.body.task) {
        
        context.res.exports(todoService.addTodos(context))
        context.res = {
            status: 200,
            body: todoService.addTodos(context)
        };
    }
    else {
        context.res = {
            status: 400,
            body: 'example: {"task": {"id": 4}}'
        };
    }
};