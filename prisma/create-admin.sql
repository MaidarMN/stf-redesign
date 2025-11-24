-- Create admin user
-- Username: admin
-- Password: admin123
INSERT INTO users (username, password)
VALUES ('admin', '$2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQ8CJJJvJvJvJvJvJvJvJvJvJ');

-- Note: This is a bcrypt hash of 'admin123'
-- IMPORTANT: Change this password after first login!
