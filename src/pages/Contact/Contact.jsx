import {
  Container,
  Headline,
  Paragraf,
  Section,
  Label,
  Input,
} from "../../components";
import "./contact.scss";

export const Contact = () => {
  return (
    <>
      <Section>
        <div className="contact__background">
          <Container>
            <div className="contact">
              <Headline level={1} color="primary">
                Əlaqə
              </Headline>
              <Paragraf size="lg" color="secondary">
                Bizimlə aşağıdakı məlumatlar vasitəsilə əlaqə saxlaya bilərsiniz
              </Paragraf>
              <div className="contact__main">
                <div className="contact__info">
                  <div className="contact__info__item">12</div>
                  <div className="contact__info__item">12</div>
                </div>
                <form className="contact__form">
                  <div>
                    <Label>ad soyad</Label>
                    <Input type="text" />
                  </div>
                  <div>
                    <Label>mail</Label>
                    <Input type="email" />
                  </div>
                  <textarea name="" id="" cols="30" rows="10"></textarea>
                </form>
              </div>
            </div>
          </Container>
        </div>
      </Section>
    </>
  );
};
