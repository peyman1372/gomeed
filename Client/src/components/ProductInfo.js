import React from "react";
import {
  Rating,
  Card,
  Icon,
  Image,
  Feed,
  Header,
  Button,
  Message,
  Grid,
  Segment,
  Label,
  Item,
} from "semantic-ui-react";

const tempDataInfo = {
  productTitle:
    "TR ' de SAYILI.. ÖZEL SHOWROOM ARACI DEĞİŞENSİZ TRAMERSİZ CLİO İCON",
  price: "155,500 TL",
  address: {
    city: "İstanbul - Avrupa",
    neighborhood: "Küçükçekmece",
    street: "Fatih Mah",
  },
  metaInfo: {
    tag: "SATILIK",
    time: "3 hafta önce",
    viewCount: 143,
    likeCount: 10,
  },
  productDetail: [
    {
      title: "İlan Numarası",
      value: "603.982.633",
    },
    {
      title: "Yakıt",
      value: "Dizel",
    },
    {
      title: "Vites",
      value: "Manuel",
    },
    {
      title: "Kasa Tipi",
      value: "Hatchback 5 kapı",
    },
    {
      title: "Çekiş",
      value: "Önden Çekiş",
    },
    {
      title: "Motor Gücü",
      value: "126-150 HP",
    },
    {
      title: "Motor Hacmiş",
      value: "1301-1600 cm3",
    },
    {
      title: "Renk",
      value: "Beyaz",
    },
    {
      title: "Durumu",
      value: "İkinci El",
    },
    {
      title: "Çekiş",
      value: "Önden Çekiş",
    },
    {
      title: "KM",
      value: "58000",
    },
    {
      title: "Model Yılı",
      value: "2016",
    },
  ],
};
const tempInfo = [];
for (let i = 0; i < tempDataInfo.productDetail.length; i++) {
  var largest =
    tempDataInfo.productDetail[i].title.length >
    tempDataInfo.productDetail[i].value.length
      ? tempDataInfo.productDetail[i].title.length
      : tempDataInfo.productDetail[i].value.length;
  var _with = Math.round(largest / 3);

  tempInfo.push(
    <Grid.Column width={_with}>
      <Header size="tiny" disabled textAlign="left">
        {tempDataInfo.productDetail[i].title}
      </Header>
      <Header as="h4" textAlign="left">
        {tempDataInfo.productDetail[i].value}
      </Header>
    </Grid.Column>
  );
}

const MetaInfo = () => {
  return (
    <React.Fragment>
      <Grid.Column width={2} floated="left">
        <Label as="a" basic color="red">
          {tempDataInfo.metaInfo.tag}
        </Label>
      </Grid.Column>
      <Grid.Column width={3} floated="right">
        <Header
          size="tiny"
          disabled
          textAlign="left"
          style={{ display: "inline-block" }}
        >
          <Item>
            <Item.Content>
              <Item.Header>
                <Icon name="like" />
                {tempDataInfo.metaInfo.likeCount}
              </Item.Header>
            </Item.Content>
          </Item>
          <Item>
            <Item.Content>
              <Item.Header>
                <Icon name="eye" />
                {tempDataInfo.metaInfo.viewCount}
              </Item.Header>
            </Item.Content>
          </Item>
        </Header>

        {/* <Label>
          <Icon name="heart" horizontal />
          <Label.Detail>{tempDataInfo.metaInfo.likeCount}</Label.Detail>
        </Label>
        <Label>
          <Icon name="eye" horizontal aria-label="test" />
          <Label.Detail>{tempDataInfo.metaInfo.viewCount}</Label.Detail>
        </Label> */}
        {/* <Header.Content>{tempDataInfo.metaInfo.likeCount}</Header.Content> */}
        {/* <Icon name="eye" />
          <Header.Content>{tempDataInfo.metaInfo.viewCount}</Header.Content> */}

        {/* <Label as="a" icon="heart">
            {tempDataInfo.metaInfo.likeCount}
            <Icon name="heart" />
          </Label> */}
        {/* <Label as="a" icon="heart">
            <Icon name="eye" />
            {tempDataInfo.metaInfo.viewCount}
          </Label> */}
      </Grid.Column>
      {/* <Grid.Column width={2} floated="right" style>

        <Item>
          <Item.Content>
            <Item.Header>
              <Icon name="like" />
              {tempDataInfo.metaInfo.likeCount}
            </Item.Header>
          </Item.Content>
        </Item>
      </Grid.Column> */}

      {/* <Grid.Column width={3} floated="right">
        <Label>
          <Icon name="heart" />
          <Label.Detail>214</Label.Detail>
        </Label>
      </Grid.Column> */}
    </React.Fragment>
  );
};
const text = `ARAÇ 2017 MAYIS TRAFİĞE ÇIKIŞLIDIR.\n

BAKIMLARI YENİ YAPILMIŞTIR..\n

DİĞER İCON ARAÇLARLA KIYASLARKEN AŞAĞIDA YAZDIĞIM FABRİKA ÇIKIŞI OPSİYONLARI LÜTFEN İNCELEYIN. FİLO VE ŞİRKET ARAÇLARIYLA KARIŞTIRMAYIN)\n

ICON PAKETE EK OLARAK:\n

AMBLEM İÇİ ORJİNAL FABRİKASYON GERİ GÖRÜŞ KAMERASI.\n

DAMA DESENLİ TAVAN KAPLAMASI.\n

SEDEFLİ BEYAZ RENK TR de SAYILI SADECE BU SERİYE ÖZEL \n

17 inc ELMAS JANTLAR.\n

ÇİFT RENKLİ (KAHVE GRİ) KOKPİT GÖĞÜS VE YAN DÖŞEMELER \n

ÖZEL SPOR KOLTUKLAR \n

ÖN 360• PARK SENSÖRLERİ. HİÇBİR STANDART CLİO DA BULUNMAZ ... + ARKA PARK SENSÖRÜ \n

ELEKTROKROM OTOMATİK KARARAN DİKİZ AYNASI.\n

IŞIKLI GÜNEŞLİK MAKYAJ AYNALARI\n

FABRİKASYON KARARTMALI CAMLAR.\n

KÖPEKBALIĞI ANTEN\n

PİANO BLACK AYNALAR\n

LASTIKLER 2 AY ONCE ALINDI\n

NIKEN MARKA RUZGARLIKLAR\n

ARKA CIFT EKSOZ DIFIZÖR \n

CLİO YAZILI KAPI EŞİKLERİ \n

CLİO' YA ÖZEL 3D PASPASLAR VE BAGAJ HAVUZU\n

ARKA SOL KAPI VE CAMURLUKTA ÇİZİLMEDEN DOLAYI BOYA VARDIR.. DEGISEN VE TRAMER YOKTUR..`;

let newText = text.split("\n").map((i) => {
  return <p>{i}</p>;
});
const addressText = `${tempDataInfo.address.city} / ${tempDataInfo.address.neighborhood} / ${tempDataInfo.address.street}`;

// eslint-disable-next-line import/no-anonymous-default-export
const ProductInfo = () => {
  return (
    <React.Fragment>
      <Segment>
        <Grid>
          <Grid.Row>{MetaInfo()}</Grid.Row>
          <Grid.Row>
            <Grid.Column width={12}>
              <Header size="tiny">{tempDataInfo.productTitle}</Header>
            </Grid.Column>
            <Grid.Column width={4}>
              <Header as="h3" color="blue" textAlign="right">
                {tempDataInfo.price}
              </Header>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={12}>
              <Header size="tiny" disabled>
                {addressText}
              </Header>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Segment>
        <Grid>{tempInfo}</Grid>
        <Header size="medium">İlan Açıklaması</Header>
        <p>{newText}</p>
      </Segment>
    </React.Fragment>
  );
};
export default ProductInfo;
