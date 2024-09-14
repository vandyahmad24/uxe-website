import Image from 'next/image';

const partners = [
  { name: 'Emaar', src: '/image/partner_1.png' },
  { name: 'Dubai Holding', src: '/image/partner_2.png' },
  { name: 'Nakheel', src: '/image/partner_3.png' },
  { name: 'Damac', src: '/image/partner_4.png' },
  { name: 'Al Habtoor', src: '/image/partner_5.png' },
  { name: 'Lulu', src: '/image/partner_6.png' },
  { name: 'Emirates NBD', src: '/image/partner_7.png' },
  { name: 'Jumeirah', src: '/image/partner_8.png' },
  { name: 'Damas', src: '/image/partner_9.png' },
  { name: 'Al Futtaim', src: '/image/partner_10.png' }
];

const Collaborative = () => {
  return (
    <div className="max-w-[1440px] mx-auto p-[max(48px,_min(calc(100vw_*_(80_/_1440)),_80px))_max(20px,_min(calc(100vw_*_(190_/_1440)),_190px))_48px_max(20px,_min(calc(100vw_*_(190_/_1440)),_190px))] max-xl:px-[max(20px,_min(calc(100vw_*_(70_/_1440)),_70px))] overflow-hidden">
      <div className="flex flex-col gap-[48px]">
        <h2 className="text-2xl font-semibold mb-8 text-center">
          Our Collaborative Partnerships Fueling Innovation, Growth, and Success Together
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 justify-center items-center">
          {partners.map((partner, index) => (
            <div key={index} className="mx-auto">
              <Image src={partner.src} alt={partner.name} width={120} height={60} className="object-contain" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collaborative;
