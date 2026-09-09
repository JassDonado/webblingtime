import { Truck, ShieldCheck, Lock } from "lucide-react";

export default function InfoBanner() {
  const items = [
    {
      icon: <Truck className="info-banner-icon" aria-hidden="true" />,
      text: (
        <>
          ENVÍO GRATIS POR COMPRAS SUPERIORES A{" "}
          <span className="info-banner-accent">$200.000 COP</span>
        </>
      ),
    },
    {
      icon: <ShieldCheck className="info-banner-icon" aria-hidden="true" />,
      text: "GARANTÍA CERTIFICADA DE FÁBRICA",
    },
    {
      icon: <Lock className="info-banner-icon" aria-hidden="true" />,
      text: "PAGOS 100% SEGUROS",
    },
  ];

  return (
    <div className="info-banner">
      <div className="info-banner-track">
        {[0, 1].map((group) => (
          <div className="info-banner-group" key={group} aria-hidden={group === 1}>
            {items.map((item, index) => (
              <div className="info-banner-item" key={`${group}-${index}`}>
                {item.icon}
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}