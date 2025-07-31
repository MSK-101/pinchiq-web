import Image from "next/image";

export default function FooterSection() {
  return (
    <section className="flex flex-col md:flex-row items-center md:justify-between py-20 mx-4 md:mx-20 gap-5 border-t border-t-slate-300">
      <Image src="/logo-dark.png" alt="logo" width={100} height={100} />
      <p className="text-gray-500">© 2025 PinchIQ. All rights reserved.</p>
    </section>
  );
}
