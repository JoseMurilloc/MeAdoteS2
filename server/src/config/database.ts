export const configDatabase = {
	user: process.env.DATABASE_USER,
	password: process.env.DATABASE_PASSWORD,
	host: process.env.DATABASE_HOST,
	port: Number(process.env.DATABASE_PORT),
	database: process.env.MODE === 'development' ?
    process.env.DATABASE_NAME : 'meadote_test'
}

