import pool from '../config/db.config.js'


const createAdminUser = async (request, response) => {
  let user = request.body
  let insertQuery = `insert into adminuser(firstname, lastname, image, emailladdress, password) 
  values('${user.firstname}', '${user.lastname}',
   '${user.image}','${user.emailladdress}','${user.password}')`
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

const getAllAdminUsers = async (request, response) => {
  try {
    await pool.query('select * from adminuser order by id asc', (error, results) => {
      if (error) {
        throw error
      }
      return response.status(200).json(results.rows)
    })
  } catch (error) {
    console.log(error.message)
  }
};

const getAdminUserById = async (request, respond) => {
  try {
    await pool.query(`select * from adminuser where id=${request.params.id}`, (error, result) => {
      if (error) {
        throw error
      }
      return respond.status(200).send(result.rows)
    })
  } catch (error) {
    console.log(error.message)
  }
};

const updateadminUserDetail = async (request, respond) => {
  let user = request.body
  let updateQuery =
    `update adminuser set id = '${user.id}',firstname = '${user.firstname}',lastname = '${user.lastname}', 
   emailladdress = '${user.emailladdress}', image = '${user.image}', password = '${user.password}
  'where id = ${user.id}`
  try {
    pool.query(updateQuery, (error, result) => {
      if (error) {
        throw error
      }
      return respond.status(200).send('Update was successful')
    })
  } catch (error) {
    console.log(error.message)
  }
};

const deleteAdminUser = async (request, respond) => {
  let insertQuery = `delete from adminuser where id=${request.params.id}`
  try {
    pool.query(insertQuery, (error) => {
      if (error)
        throw error;
    })
    return  respond.status(200).send('Deleted successfully')
  } catch (error) {
    console.log(error.message)
  }
};

export default {
  createAdminUser,
  getAllAdminUsers,
  getAdminUserById,
  updateadminUserDetail,
  deleteAdminUser
}
