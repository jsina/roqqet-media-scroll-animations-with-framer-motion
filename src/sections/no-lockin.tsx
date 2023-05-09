import { Love } from "@/components/love";

export const NoLockin = () => (
  <section className="relative z-10 h-screen bg-white py-96">
    <h2 className="mt-12 text-center font-heading text-3xl font-bold leading-[1] tracking-tighter text-secondary">
      No lock-in.
      <br />{" "}
      <span className="text-secondary">
        Use RoqqetMedia which
        <br />
        <div className="flex items-center justify-center space-x-2">
          <span>you love</span>
          <Love />
        </div>
      </span>
    </h2>
  </section>
);
