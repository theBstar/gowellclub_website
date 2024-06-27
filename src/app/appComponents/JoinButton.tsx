'use client';

export default function JoinButton() {
    const message = encodeURI('Hey Bikram, I am [wonderful person]. Want to know how Gowell.club works. Can you tell me more?');
    return (
        <button onClick={() => window.open(`https://wa.me/9113822981?text=${message}`, '_blank')} className="bg-primary text-white px-4 py-2 rounded-lg mt-4 w-60">
            Join the club
        </button>
    )
}