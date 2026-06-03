-- Init DB schema for contact messages
CREATE TABLE IF NOT EXISTS contact_messages (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Init DB schema for products
CREATE TABLE IF NOT EXISTS products (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  type TEXT NOT NULL,
  description TEXT NOT NULL,
  sizes TEXT[] NOT NULL,
  prices TEXT[] NOT NULL,
  image_url TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Insert sample products
INSERT INTO products (title, type, description, sizes, prices, image_url)
VALUES 
  ('Фильтр-пакеты Гондурас Ксинакла натуральная', 'натуральный', 'Сладкий кофе со вкусом цитрусов и яблочного пирога', ARRAY['250 гр', '1000 гр'], ARRAY['1259 руб', '3778 руб'], '/product_1.png'),
  ('Espresso Blend', 'натуральный', 'Плотный кофе с нотками шоколада и ореха', ARRAY['250 гр', '1000 гр'], ARRAY['1450 руб', '4200 руб'], '/product_1.png'),
  ('Light Roast Arabica', 'натуральный', 'Легкая обжарка с ярким кислотным профилем', ARRAY['250 гр', '1000 гр'], ARRAY['1350 руб', '3900 руб'], '/product_1.png')
ON CONFLICT DO NOTHING;
