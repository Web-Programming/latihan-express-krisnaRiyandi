//Controller index
const index = (req, res) => {
 	res.render('index', { title: 'Express MVC' }); 
}; 

module.exports = { index }; 