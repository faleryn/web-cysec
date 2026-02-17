import PaymentClient from './PaymentClient';

export async function generateStaticParams() {
  return [
    { service: 'security-assessment' },
    { service: 'managed-security-services' },
    { service: 'penetration-testing' },
  ];
}

export default function Page({ params }: { params: { service: string } }) {
  return <PaymentClient service={params.service} />;
}
