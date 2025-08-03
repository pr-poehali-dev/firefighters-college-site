import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const Index = () => {

  const courses = [
    {
      title: "Пожарный",
      description: "Профессиональная подготовка специалистов по тушению пожаров и проведению аварийно-спасательных работ",
      duration: "2 года 10 месяцев",
      level: "Основная программа"
    },
    {
      title: "Пожарная безопасность",
      description: "Подготовка специалистов по обеспечению пожарной безопасности объектов и территорий",
      duration: "3 года 10 месяцев", 
      level: "Основная программа"
    }
  ];

  const library = [
    {
      title: "Справочник пожарного",
      author: "МЧС России",
      type: "Учебник",
      year: "2024"
    },
    {
      title: "Пожарная тактика в практических примерах",
      author: "Иванов В.П.",
      type: "Методическое пособие", 
      year: "2023"
    },
    {
      title: "Техника безопасности при тушении пожаров",
      author: "Петров С.А.",
      type: "Инструкция",
      year: "2024"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-blue-50 font-open-sans">
      {/* Header */}
      <header className="bg-white shadow-lg border-b-4 border-red-600">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img 
                src="/img/04469626-7765-4ad0-bad0-37e6b11590be.jpg" 
                alt="Герб пожарной службы"
                className="h-16 w-16 object-contain"
              />
              <div>
                <h1 className="text-2xl font-bold font-montserrat text-red-600">ВОСКРЕСЕНСКИЙ КОЛЛЕДЖ</h1>
                <p className="text-blue-800 font-semibold">Структурное подразделение №2</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-red-600 font-bold text-lg">🇷🇺</div>
              <p className="text-sm text-gray-600">МЧС России</p>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold font-montserrat mb-6">
            ГОТОВИМ ГЕРОЕВ РОССИИ
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Наш колледж - это кузница кадров для пожарно-спасательной службы России. 
            Мы воспитываем настоящих защитников, готовых служить Родине и спасать жизни граждан.
          </p>
          <div className="flex justify-center space-x-4">
            <Button size="lg" variant="secondary" className="font-semibold">
              <Icon name="BookOpen" className="mr-2" />
              Поступить в колледж
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-red-600 font-semibold">
              <Icon name="Users" className="mr-2" />
              О нас
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <Tabs defaultValue="training" className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-white border-2 border-red-200">
            <TabsTrigger value="training" className="font-semibold data-[state=active]:bg-red-600 data-[state=active]:text-white">
              <Icon name="GraduationCap" className="mr-2" />
              Обучение
            </TabsTrigger>
            <TabsTrigger value="library" className="font-semibold data-[state=active]:bg-red-600 data-[state=active]:text-white">
              <Icon name="Library" className="mr-2" />
              Библиотека
            </TabsTrigger>
          </TabsList>

          {/* Training Section */}
          <TabsContent value="training" className="mt-8">
            <div className="mb-8">
              <h3 className="text-3xl font-bold font-montserrat text-red-600 mb-4">
                Программы обучения
              </h3>
              <p className="text-gray-700 text-lg">
                Наши образовательные программы соответствуют самым высоким стандартам подготовки пожарных и спасателей
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course, index) => (
                <Card key={index} className="border-l-4 border-l-red-600 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="font-montserrat text-blue-800">{course.title}</CardTitle>
                      <Badge variant={course.level === 'Обязательный' ? 'destructive' : 'secondary'}>
                        {course.level}
                      </Badge>
                    </div>
                    <CardDescription className="text-gray-600">
                      {course.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-red-600">
                        <Icon name="Clock" className="inline mr-1" size={16} />
                        {course.duration}
                      </span>
                      <Button variant="outline" size="sm">
                        Подробнее
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>



          {/* Library Section */}
          <TabsContent value="library" className="mt-8">
            <div className="mb-8">
              <h3 className="text-3xl font-bold font-montserrat text-red-600 mb-4">
                Электронная библиотека
              </h3>
              <p className="text-gray-700 text-lg">
                Доступ к современным учебным материалам и методическим пособиям
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {library.map((book, index) => (
                <Card key={index} className="border-l-4 border-l-green-600 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-green-600 rounded flex items-center justify-center">
                        <Icon name="BookOpen" className="text-white" size={20} />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="font-montserrat text-blue-800 text-lg">
                          {book.title}
                        </CardTitle>
                        <CardDescription>
                          {book.author} • {book.year}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary">
                        {book.type}
                      </Badge>
                      <Button variant="outline" size="sm">
                        <Icon name="Download" className="mr-1" size={16} />
                        Скачать
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-bold font-montserrat text-xl mb-4">Контакты</h4>
              <div className="space-y-2">
                <p><Icon name="MapPin" className="inline mr-2" size={16} />г. Москва, ул. Пожарная, д. 1</p>
                <p><Icon name="Phone" className="inline mr-2" size={16} />+7 (495) 123-45-67</p>
                <p><Icon name="Mail" className="inline mr-2" size={16} />info@fire-college.ru</p>
              </div>
            </div>
            <div>
              <h4 className="font-bold font-montserrat text-xl mb-4">Быстрые ссылки</h4>
              <div className="space-y-2">
                <p><a href="#" className="hover:text-red-300 transition-colors">Поступление</a></p>
                <p><a href="#" className="hover:text-red-300 transition-colors">Расписание</a></p>
                <p><a href="#" className="hover:text-red-300 transition-colors">Новости</a></p>
                <p><a href="#" className="hover:text-red-300 transition-colors">Документы</a></p>
              </div>
            </div>
            <div>
              <h4 className="font-bold font-montserrat text-xl mb-4">Мы в соцсетях</h4>
              <div className="flex space-x-4">
                <Button variant="outline" size="sm" className="border-white text-white hover:bg-white hover:text-blue-900">
                  ВК
                </Button>
                <Button variant="outline" size="sm" className="border-white text-white hover:bg-white hover:text-blue-900">
                  Telegram
                </Button>
                <Button variant="outline" size="sm" className="border-white text-white hover:bg-white hover:text-blue-900">
                  YouTube
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-blue-700 mt-8 pt-8 text-center">
            <p>© 2024 Российский пожарно-спасательный колледж. Все права защищены.</p>
            <p className="text-red-300 font-semibold mt-2">🇷🇺 Служим России • Защищаем граждан • Спасаем жизни 🇷🇺</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;