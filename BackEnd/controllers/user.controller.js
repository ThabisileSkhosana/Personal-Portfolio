import pool from '../config/db.config.js'

const createUserMessage = async (request, response) => {
  let user = request.body
  let insertQuery = `insert into users(firstname, lastname, message, emailaddress) 
  values('${user.firstname}', '${user.lastname}','${user.message}','${user.emailaddress}')`
  try {
    await pool.query(insertQuery, (error) => {
      if (error) {
        console.log(error.message)
      }
      response.status(201).send('Insertion was successful')
    })
  } catch (error) {
    console.log(error.message)
  }
};

const getAllUsers = async (request, response) => {
  try {
    await pool.query('select * from users order by id asc', (error, results) => {
      if (error) {
        throw error
      }
      return response.status(200).json(results.rows)
    })
  } catch (error) {
    console.log(error.message)
  }
};

export default  {createUserMessage, getAllUsers}