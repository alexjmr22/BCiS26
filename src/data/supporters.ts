import camara from "../assets/images/01. Logos/Camara_logo.png";
import deec from "../assets/images/01. Logos/DEEC.uc-branco.png";
import ipdj from "../assets/images/01. Logos/LOGO IPDJ cor Horizontal.png";
import fctuc from "../assets/images/01. Logos/FCTUC_Logo.png";
import pt_space from "../assets/images/01. Logos/pt_space.png";

export interface Supporter {
  name: string;
  logo: string;
}

export const supporters: Supporter[] = [
  { logo: fctuc, name: "FCTUC" },
  { logo: deec, name: "DEEC" },
  { logo: camara, name: "Câmara Municipal de Coimbra" },
  { logo: ipdj, name: "IPDJ" },
  { logo: pt_space, name: "PT Space" },
];


