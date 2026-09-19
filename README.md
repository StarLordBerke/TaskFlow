# TaskFlow - Görev ve Proje Yönetim Sistemi API'si

## 📌 Proje Hakkında
Bu proje, bir yazılım şirketinin ekip içerisindeki görevleri, projeleri ve çalışanların sorumluluklarını takip etmesi amacıyla geliştirilmiş bir REST API sistemidir. Node.js ve Express.js kullanılarak geliştirilmiş olup, tamamen RESTful mimariye uygun CRUD operasyonlarını desteklemektedir.

## 🚀 Kullanılan Teknolojiler
- **Backend:** Node.js, Express.js
- **Mimari:** REST API
- **Ara Katman (Middleware):** Temel Loglama Sistemi
- **Test Aracı:** Postman

## ⚙️ Kurulum ve Çalıştırma Talimatları

Projeyi kendi yerel ortamınızda (localhost) çalıştırmak için aşağıdaki adımları sırasıyla izleyin:

### Ön Koşullar
Bilgisayarınızda [Node.js](https://nodejs.org/)'in ve API testlerini yapabilmek için [Postman](https://www.postman.com/)'in yüklü olması gerekmektedir.

### 1. Projeyi Hazırlama
Proje dosyalarını indirdikten veya kopyaladıktan sonra terminalinizi (veya komut satırınızı) açın ve proje klasörünün dizinine gidin:
`cd taskflow-api`

### 2. Bağımlılıkları Yükleme
Projenin çalışması için gerekli olan Express.js gibi paketleri kurmak için terminale aşağıdaki komutu girin:
`npm install`

### 3. Sunucuyu Başlatma
Kurulum tamamlandıktan sonra sunucuyu ayağa kaldırmak için şu komutu çalıştırın:
`node index.js`

Terminalde `Sunucu http://localhost:3000 adresinde başarıyla çalışıyor...` mesajını gördüğünüzde API kullanıma hazırdır.

## 🗂️ Veri Modeli Tasarımı
Sistem geçici hafıza (array) üzerinde çalışmaktadır. Temel "Görev (Task)" nesnesi aşağıdaki alanlardan oluşur:
- **id** (Integer): Görevin benzersiz kimliği (Otomatik artar).
- **title** (String): Görevin başlığı.
- **description** (String): Görevin detaylı açıklaması.
- **priority** (String): Görevin aciliyet durumu (düşük, orta, yüksek).
- **assignee** (String): Görevin atandığı çalışan.
- **status** (String): Görevin mevcut durumu (bekliyor, devam ediyor, tamamlandı).

## 📡 API Uç Noktaları (Endpoints)

Sistem aşağıdaki 5 temel uç noktayı sunmaktadır:

| Metod  | Endpoint       | Açıklama |
| :--- | :--- | :--- |
| **POST** | `/tasks` | Sisteme yeni bir görev ekler. (JSON formatında body gerektirir) |
| **GET** | `/tasks` | Sistemde kayıtlı olan tüm görevleri liste halinde getirir. |
| **GET** | `/tasks/:id` | Sadece URL'de belirtilen ID'ye sahip görevin detaylarını getirir. |
| **PUT** | `/tasks/:id` | Belirtilen ID'ye sahip görevin bilgilerini günceller. |
| **DELETE**| `/tasks/:id` | Belirtilen ID'ye sahip görevi sistemden tamamen siler. |

## 🛠️ Middleware (Ara Katman)
Projeye dahil edilen **Logger Middleware** sayesinde, API'ye gelen her istek (Method, Endpoint ve Zaman Damgası) eşzamanlı olarak sunucu konsoluna yazdırılarak süreçlerin izlenebilirliği sağlanmıştır.

---
*Geliştirici: Berke Mert Öztürk*
