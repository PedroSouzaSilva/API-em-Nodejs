const routes = (app) => {
    app.route('/contact')
    .get((req, res) => 
    res.send('GET resquest successful!!!'))
    
    .post((req, res) => 
    res.send('POST resquest successful!!!'));

    app.route('/contact/:contactId')
    .put((req, res) => 
    res.send('PUT resquest successful!!!'))
    
    .delete((req, res) => 
    res.send('DELETE resquest successful!!!'));
}

export default routes;