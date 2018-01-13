import { addNewContact } from "../controllers/crmControllers";

const routes = (app) => {
    app.route('/contact')
    .get((req, res, next) => {
        //middleware
        console.log(`Request from: ${req.originalUrl}`)
        console.log(`Request from: ${req.method}`)
        next();
    }, (req, res, next) => {
        res.send('GET resquest successful!!!');
    })
    
    //POST endpoint
    .post(addNewContact);

    app.route('/contact/:contactId')
    .put((req, res) => 
    res.send('PUT resquest successful!!!'))
    
    .delete((req, res) => 
    res.send('DELETE resquest successful!!!'));
}

export default routes;