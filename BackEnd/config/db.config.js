import Pool from 'pg';
import 'dotenv/config'
const PoolConst = Pool.Pool;


  const pool = new PoolConst({
            user: process.env.PGUSER,
            host: process.env.PGHOST,
            database: process.env.PGDATABASE,
            password: process.env.PGPASSWORD,
            port: process.env.PGPORT,
        });
 
 
export default pool;




