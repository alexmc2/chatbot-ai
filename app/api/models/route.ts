import openai from '@/lib/configuration';

export async function GET() {
  const models = await openai.models.list().then((res) => res.data);

  const modelOptions = models.map((model) => ({
    value: model.id,
    label: model.id,
  }));

  return new Response(JSON.stringify({ modelOptions }), {
    status: 200,
  });
}
