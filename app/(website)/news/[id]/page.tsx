import newsdb from "../db";

export async function getNewsById(id: number) {
  return newsdb.find(news => news.id === id);
}

export default async function DisplayNewsByIdPage({ params }: { params: { id: string } }) {
  const newsItem = await getNewsById(parseInt(params.id));

  if (!newsItem) {
    return <div>ไม่พบข้อมูลข่าว</div>;
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ fontSize: "2.5em", fontWeight: "bold", marginBottom: '10px' }}>{newsItem.title}</h1>
      <p style={{ fontSize: "1.2em", lineHeight: "1.6" }}>{newsItem.body}</p>
    </div>
  );
}
