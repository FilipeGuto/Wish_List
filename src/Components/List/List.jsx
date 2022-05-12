import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
} from "reactstrap";

import "./list.css"

import oculos from "../../images/oculos.jpg";
import nike from "../../images/nike.jpeg";
import vestido from "../../images/vestido.jpg";
import vestido1 from "../../images/vestido1.jpg";
import vestido2 from "../../images/vestido2.jpg";
import vestido3 from "../../images/vestido3.jpg";
import saia1 from "../../images/saia1.jpg";
import saia2 from "../../images/saia2.jpg";
import body from "../../images/body.jpg";
import livro1 from "../../images/HomoDeus.jpg";
import livro2 from "../../images/TerradHist5.jpg";
import livro3 from "../../images/TerradHist6.jpg";
import berloque1 from "../../images/berloque1.jpg";
import berloque2 from "../../images/berloque2.jpg";
import piercing from "../../images/piercing.jpg";
import tatto from "../../images/tatto.jpg";
import base from "../../images/base.jpg";
import esmalte from "../../images/esmalte.jpg";

export default function List() {
  return (
    <div className="container">
      <Card className="card">
        <CardImg alt="Oculos" src={oculos} top width="100%" className="image"/>
        <CardBody>
          <CardTitle tag="h5">Lente do óculos</CardTitle>
          <h6>R$ 350,00</h6>
          <button className="button">
            <a href="https://api.whatsapp.com/send?phone=5511987465584" target="_blank" rel="noopener noreferrer">
              Vem de Zap
            </a>
          </button>
        </CardBody>
        <p>Entre em contato comigo</p>
      </Card>
      <Card>
        <CardImg alt="Tenis Nike" src={nike} top width="100%" className="image"/>
        <CardBody>
          <CardTitle tag="h5">Nike branco</CardTitle>
          <h6>R$ 220,00</h6>
          <button className="button">
            <a
              href="https://www.centeroutlets.com.br/products/tenis-air-force-1?variant=42532653138170"
              target="_blank"
              rel="noopener noreferrer"
            >
              Compre aqui
            </a>
          </button>
        </CardBody>
        <p>Entre em contato comigo</p>
      </Card>
      <Card>
        <CardImg alt="Vestido" src={vestido} top width="100%" className="image"/>
        <CardBody>
          <CardTitle tag="h5">Vestido</CardTitle>
          <h6>R$ 68,00</h6>
          <button className="button">
            <a
              href="https://br.shein.com/SHEIN-PETITE-Ruched-Bust-Flare-Hem-Cami-Dress-p-9752218-cat-1727.html?scici=productDetail~~RecommendList~~RS_own,RJ_NoFaultTolerant~~Customers%20Also%20Viewed~~SPcProductDetailCustomersAlsoViewedList~~0"
              target="_blank"
              rel="noopener noreferrer"
            >
              Compre aqui
            </a>
          </button>
        </CardBody>
        <p>Entre em contato comigo</p>
      </Card>
      <Card>
        <CardImg alt="Vestido" src={vestido1} top width="100%" className="image"/>
        <CardBody>
          <CardTitle tag="h5">Vestido</CardTitle>
          <h6>R$ 73,00</h6>
          <button className="button">
            <a
              href="https://br.shein.com/SHEIN-Cut-Out-Tie-Back-Ruffle-Trim-Wrap-Hem-Slip-Dress-p-1981036-cat-1727.html?src_identifier=st%3D2%60sc%3Dvestidos%60sr%3D0%60ps%3D1&src_module=search&src_tab_page_id=page_home1650050387442&scici=Search~~EditSearch~~1~~vestidos~~~~0"
              target="_blank"
              rel="noopener noreferrer"
            >
              Compre aqui
            </a>
          </button>
        </CardBody>
        <p>Entre em contato comigo</p>
      </Card>
      <Card>
        <CardImg alt="Vestido" src={vestido2} top width="100%" className="image"/>
        <CardBody>
          <CardTitle tag="h5">Vestido</CardTitle>
          <h6>R$ 76,00</h6>
          <button className="button">
            <a
              href="https://br.shein.com/Sunflower-Print-Crisscross-Cami-Mini-Dress-p-357038-cat-1727.html?src_identifier=st%3D2%60sc%3Dvestidos%60sr%3D0%60ps%3D1&src_module=search&src_tab_page_id=page_home1650050387442&scici=Search~~EditSearch~~1~~vestidos~~~~0"
              target="_blank"
              rel="noopener noreferrer"
            >
              Compre aqui
            </a>
          </button>
        </CardBody>
        <p>Entre em contato comigo</p>
      </Card>
      <Card>
        <CardImg alt="Vestido" src={vestido3} top width="100%" className="image"/>
        <CardBody>
          <CardTitle tag="h5">Vestido</CardTitle>
          <h6>R$ 65,00</h6>
          <button className="button">
            <a
              href="https://br.shein.com/SHEIN-Zipper-Back-Glitter-Cami-Dress-p-7917902-cat-1727.html?scici=productDetail~~RecommendList~~RS_own,RJ_NoFaultTolerant~~Customers%20Also%20Viewed~~SPcProductDetailCustomersAlsoViewedList~~0"
              target="_blank"
              rel="noopener noreferrer"
            >
              Compre aqui
            </a>
          </button>
        </CardBody>
        <p>Entre em contato comigo</p>
      </Card>
      <Card>
        <CardImg alt="Vestido" src={saia1} top width="100%" className="image"/>
        <CardBody>
          <CardTitle tag="h5">Saia</CardTitle>
          <h6>R$ 62,00</h6>
          <button className="button">
            <a
              href="https://br.shein.com/Striped-Panel-Belted-A-line-Dress-p-9124517-cat-1727.html?src_identifier=st%3D2%60sc%3Dcom%20cinto%20guarni%C3%A7%C3%A3o%20de%20alface%60sr%3D0%60ps%3D1&src_module=search&src_tab_page_id=page_search1651023865411&scici=Search~~EditSearch~~1~~com_20cinto_20guarni_C3_A7_C3_A3o_20de_20alface~~~~0"
              target="_blank"
              rel="noopener noreferrer"
            >
              Compre aqui
            </a>
          </button>
        </CardBody>
        <p>Entre em contato comigo</p>
      </Card>
      <Card>
        <CardImg alt="Vestido" src={saia2} top width="100%" className="image"/>
        <CardBody>
          <CardTitle tag="h5">Saia</CardTitle>
          <h6>R$ 45,00</h6>
          <button className="button">
            <a
              href="https://br.shein.com/High-Waist-Textured-Flare-Skirt-p-7076527-cat-1732.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Compre aqui
            </a>
          </button>
        </CardBody>
        <p>Entre em contato comigo</p>
      </Card>
      <Card>
        <CardImg alt="Body" src={body} top width="100%" className="image"/>
        <CardBody>
          <CardTitle tag="h5">Body preto</CardTitle>
          <h6>R$ 61,00</h6>
          <button className="button">
            <a
              href="https://br.shein.com/SHEIN-X-ANITTA-Plain-Leg-Ring-One-Piece-Swimsuit-p-10057408-cat-2193.html?src_identifier=st%3D6%60sc%3D%23SHEINxANITTA%60sr%3D0%60ps%3D1&src_module=search&src_tab_page_id=page_select_class1650058883975&scici=Search~~HotSearch~~1~~_23SHEINxANITTA~~SPcSearchWordsHot~~0"
              target="_blank"
              rel="noopener noreferrer"
            >
              Compre aqui
            </a>
          </button>
        </CardBody>
        <p>Entre em contato comigo</p>
      </Card>
      <Card>
        <CardImg alt="Livro" src={livro1} top width="100%" className="image"/>
        <CardBody>
          <CardTitle tag="h5">Livro novo</CardTitle>
          <h6>R$ 45,00</h6>
          <button className="button">
            <a
              href="https://www.amazon.com.br/Homo-deus-Yuval-Noah-Harari/dp/8535928197/ref=sr_1_1_sspa?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3G38IIVAOS77S&keywords=Homo+Deus&qid=1650060497&s=books&sprefix=homo+deus%2Cstripbooks%2C187&sr=1-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExWUlMQkVTM0c5TlU0JmVuY3J5cHRlZElkPUEwNjM1NzExM0tGOUFEVTFLV0ZCVyZlbmNyeXB0ZWRBZElkPUEwNTE1NjMwMVNQRlY4R1Y0NkEwTyZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU="
              target="_blank"
              rel="noopener noreferrer"
            >
              Compre aqui
            </a>
          </button>
        </CardBody>
        <p>Entre em contato comigo</p>
      </Card>
      <Card>
        <CardImg alt="Livro" src={livro2} top width="100%" className="image"/>
        <CardBody>
          <CardTitle tag="h5">Livro novo</CardTitle>
          <h6>R$ 34,00</h6>
          <button className="button">
            <a
              href="https://www.amazon.com.br/Terra-Hist%C3%B3rias-Odisseia-Um-Escritor/dp/8557171846/ref=sr_1_8?crid=19ZJG5XYURAKE&keywords=terra+de+historias&qid=1650060565&s=books&sprefix=Terra+de%2Cstripbooks%2C211&sr=1-8"
              target="_blank"
              rel="noopener noreferrer"
            >
              Compre aqui
            </a>
          </button>
        </CardBody>
        <p>Entre em contato comigo</p>
      </Card>
      <Card>
        <CardImg alt="Livro" src={livro3} top width="100%" className="image"/>
        <CardBody>
          <CardTitle tag="h5">Livro novo</CardTitle>
          <h6>R$ 31,00</h6>
          <button className="button">
            <a
              href="https://www.amazon.com.br/Colis%C3%A3o-dos-Mundos-Terra-Hist%C3%B3rias/dp/8557172494/ref=sr_1_7?crid=19ZJG5XYURAKE&keywords=terra+de+historias&qid=1650060565&s=books&sprefix=Terra+de%2Cstripbooks%2C211&sr=1-7"
              target="_blank"
              rel="noopener noreferrer"
            >
              Compre aqui
            </a>
          </button>
        </CardBody>
        <p>Entre em contato comigo</p>
      </Card>
      <Card>
        <CardImg alt="Berloque" src={berloque1} top width="100%" className="image"/>
        <CardBody>
          <CardTitle tag="h5">Berloque novo</CardTitle>
          <h6>R$ 80,00</h6>
          <button className="button">
            <a
              href="https://www.berloquejoias.com.br/collections/berloques/products/berloque-amo-abacate"
              target="_blank"
              rel="noopener noreferrer"
            >
              Compre aqui
            </a>
          </button>
        </CardBody>
        <p>Entre em contato comigo</p>
      </Card>
      <Card>
        <CardImg alt="Berloque" src={berloque2} top width="100%" className="image"/>
        <CardBody>
          <CardTitle tag="h5">Berloque novo</CardTitle>
          <h6>R$ 80,00</h6>
          <button className="button">
            <a
              href="https://www.berloquejoias.com.br/collections/berloques/products/berloque-girassol"
              target="_blank"
              rel="noopener noreferrer"
            >
              Compre aqui
            </a>
          </button>
        </CardBody>
        <p>Entre em contato comigo</p>
      </Card>
      <Card>
        <CardImg alt="Piercing" src={piercing} top width="100%" className="image"/>
        <CardBody>
          <CardTitle tag="h5">Piercing</CardTitle>
          <h6>R$ 80,00</h6>
          <button className="button">
            <a
              href="https://api.whatsapp.com/send?phone=5511987465584"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vem de Zap
            </a>
          </button>
        </CardBody>
        <p>Entre em contato comigo</p>
      </Card>
      <Card>
        <CardImg alt="Tatto" src={tatto} top width="100%" className="image"/>
        <CardBody>
          <CardTitle tag="h5">Tatto</CardTitle>
          <h6>R$ 150,00</h6>
          <button className="button">
            <a
              href="https://api.whatsapp.com/send?phone=5511987465584"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vem de Zap
            </a>
          </button>
        </CardBody>
        <p>Entre em contato comigo</p>
      </Card>
      <Card>
        <CardImg alt="Base" src={base} top width="100%" className="image"/>
        <CardBody>
          <CardTitle tag="h5">Base</CardTitle>
          <h6>R$ 30,00</h6>
          <button className="button">
            <a
              href="https://api.whatsapp.com/send?phone=5511987465584"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vem de Zap
            </a>
          </button>
        </CardBody>
        <p>Entre em contato comigo</p>
      </Card>
      <Card>
        <CardImg alt="Esmalte" src={esmalte} top width="100%" className="image"/>
        <CardBody>
          <CardTitle tag="h5">Esmalte</CardTitle>
          <h6>R$ 10,00</h6>
          <button className="button">
            <a
              href="https://api.whatsapp.com/send?phone=5511987465584"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vem de Zap
            </a>
          </button>
        </CardBody>
        <p>Entre em contato comigo</p>
      </Card>
    </div>
  );
}
