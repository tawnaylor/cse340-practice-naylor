-- Practice tables for student assignments.
-- Run by setup.js after seed.sql. IF NOT EXISTS keeps submitted data across re-seeds.

CREATE TABLE IF NOT EXISTS contact_form (
    id SERIAL PRIMARY KEY,
    subject VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    submitted TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
