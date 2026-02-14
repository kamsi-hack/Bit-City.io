CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(100),
    password TEXT,
    balance DECIMAL DEFAULT 0
);

CREATE TABLE kyc (
    id SERIAL PRIMARY KEY,
    user_id INT,
    status VARCHAR(20) DEFAULT 'pending'
);
