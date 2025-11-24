-- Create news table
CREATE TABLE IF NOT EXISTS news (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  summary TEXT NOT NULL,
  date TIMESTAMP NOT NULL,
  category TEXT NOT NULL,
  "mainImage" TEXT,
  images TEXT[] DEFAULT '{}',
  "createdAt" TIMESTAMP DEFAULT NOW(),
  "updatedAt" TIMESTAMP DEFAULT NOW()
);

-- Create users table
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  username TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL
);

-- Insert sample news (the World Bank article)
INSERT INTO news (title, content, summary, date, category, "mainImage", images)
VALUES (
  'ДЭЛХИЙН БАНКНЫ ТӨЛӨӨЛӨГЧИД ҮНДЭСНИЙ ШИНЖЛЭХ УХААН, ТЕХНОЛОГИЙН САНД ЗОЧИЛЖ, САНГИЙН ҮЙЛ АЖИЛЛАГАА БОЛОН ШУТ-ИЙН САЛБАРЫН ӨНӨӨГИЙН БАЙДЛЫН ТАЛААР УУЛЗАЛТ ХИЙЛЭЭ',
  'Дэлхийн банкны төлөөлөгчид болох Кристиан Кихада Торрес (хувийн хэвшлийн хөгжлийн ахлах мэргэжилтэн, ШУТИ-ын ахлагч), Кибум Ким (хувийн хэвшлийн мэргэжилтэн) нар "Шинжлэх ухаан, технологи, инновац (ШУТИ)-ын системийг бэхжүүлэх, Монгол улсын зах зээлд нэвтрүүлэх" сэдэвт судалгааныхаа талаар 2025 оны 10-р сарын 15-ны өдөр Үндэсний шинжлэх ухаан, технологийн сан (ҮШУТС)-д зочилж, байгууллагын удирдлагуудтай албан уулзалт хийлээ.

Хамтарсан уулзалтын хүрээнд Монгол Улсын шинжлэх ухаан, технологи, инновацын тогтолцооны өнөөгийн байдал, бодлого хэрэгжилтийн түвшин, мөн зах зээлд үр өгөөжөө өгөхүйц технологи дамжуулах үйл ажиллагааны бэрхшээл, боломжуудын талаар харилцан санал солилцлоо.

Уулзалтын төгсгөлд талууд цаашид харилцан мэдээлэл солилцож, боломжит чиглэлүүдэд хамтран ажиллахаа илэрхийллээ.',
  'Дэлхийн банкны төлөөлөгчид болох Кристиан Кихада Торрес, Кибум Ким нар ШУТИ-ын системийг бэхжүүлэх сэдэвт судалгааныхаа талаар ҮШУТС-д зочилж, байгууллагын удирдлагуудтай албан уулзалт хийлээ.',
  '2025-10-15',
  'Мэдээ',
  '/news/news-1-main.jpg',
  ARRAY['/news/news-1-img2.jpg', '/news/news-1-img3.jpg']
);
