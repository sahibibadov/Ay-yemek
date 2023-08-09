import { Headline, Paragraf } from "../../components";
import "./aboutmain.scss";

export const AboutMain = () => {
  return (
    <div className="about-main">
      <Headline level={1} color="primary">
        Haqqımızda
      </Headline>
      <Paragraf size="lg" color="secondary">
        Ayyemek, zövqülokma yeməklərini ən sürətli və asan şəkildə qapınıza çatdıran
        bir yemək sifarişi platformasıdır
      </Paragraf>

      <div className="about-main__images">
        <img src="aboutimg1.jpg" alt="aboutimg1" />
        <img src="aboutimg2.jpg" alt="aboutimg2" />
      </div>

      <div className="about-main__content">
        <Headline level={2} color="secondary">
          Biz nə edirik?
        </Headline>

        <p>
          Missiyamız, geniş restoran seçimləri təklif edərək zövqünüzə uyğun ən yaxşı
          yeməkləri təqdim etməkdir. Ayyemek olaraq, yemək sifarişi təcrübəsini daha
          da yaxşılaşdırmaq üçün daimi çalışırıq. Seçkin restoranlarla əməkdaşlıq
          edərək müxtəlif menyularla keyfiyyətli yemək variantları təklif edirik.
          Sayt və tətbiqimiz vasitəsilə asanlıqla yemək sifarişi verə bilər, sevimli
          restoranlarınızın dadlarını kəşf edə bilər və xüsusi qidalanma
          tələblərinizi və ya allergiyalarınızı nəzərə alaraq şəxsi sifarişlər yarada
          bilərsiniz.
          <br />
          <br /> Müştəri razılığı bizim üçün əsas prioritetdir. Tez və etibarlı
          çatdırılma xidməti təklif edərək, yeməklərinizi təzə və isti bir şəkildə
          qapınıza çatdırırıq. Sifarişlərinizi asanlıqla izləyə bilər, ödəniş
          proseslərini təhlükəsiz şəkildə başa vura bilər və hər addımda professional
          dəstək komandamızdan yardım ala bilərsiniz. Ayyemek olaraq, yemək sifarişi
          təcrübənizi unutulmaz etmək üçün səy göstəririk. Hər bir müştəri bizim üçün
          əhəmiyyətlidir və ən yaxşı yemək təcrübəsini təqdim etmək üçün daimi olaraq
          özümüzü inkişaf etdiririk. Siz də Ayyemek ailəsinə qoşulun, zövqünüzə uyğun
          əlaqəli yeməklərin tadını çıxarın və dadı qapınıza gətirməyimizə icazə
          verin. Hər bir öğün, bizim üçün bir ayrıcalıq və sizə ən yaxşı xidməti
          təqdim etməkdən məmnuniyyət duyuruq.
        </p>
      </div>
    </div>
  );
};
