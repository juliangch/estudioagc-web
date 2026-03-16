export const prerender = false;

export const POST = async ({ request }: { request: Request }) => {
    const text = await request.text();
    const { nombre, razon_social, email, motivo } = JSON.parse(text);
    const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${import.meta.env.RESEND_API_KEY}`,
        },
        body: JSON.stringify({
            from: 'contacto@estudio-agc.com.ar',
            to: 'a.gonzalezcarbone@gmail.com',
            reply_to: email,
            subject: `Nuevo mensaje de ${nombre}`,
            html: `
                <p><strong>Nombre:</strong> ${nombre}</p>
                ${razon_social ? `<p><strong>Razón Social:</strong> ${razon_social}</p>` : ''}
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Motivo:</strong> ${motivo}</p>
                `,
        }),
    });

    const data = await res.json();
    if (!res.ok) {
        return new Response(JSON.stringify({ error: data }), { status: 500 });
    }

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
    
};