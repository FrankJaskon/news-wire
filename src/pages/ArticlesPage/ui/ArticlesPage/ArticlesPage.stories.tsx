import { ComponentStory, ComponentMeta, Story } from '@storybook/react'
import { ArticleType } from '@/entities/Article'
import { StoreDecorator } from '@/shared/config/storybook/decorators/StoreDecorator'
import ArticlesPage from './ArticlesPage'

const article: ArticleType = {
	'id': 1,
	'profile': {
		'id': 1,
		'username': 'admin',
		'avatar': 'https://teleprogramma.pro/sites/default/files/nodes/node_436422_1653684561.jpg'
	},
	'title': 'Javascript news, Що нового у JS у 2022 році?',
	'subtitle': 'Що нового у JS у 2022 році?',
	'img': 'https://pbs.twimg.com/media/FMukdWraQAMAuxa.jpg',
	'views': 1022,
	'createdAt': '26.02.2022',
	'type': [
		'IT', 'ECONOMIC', 'SCIENCE'
	],
	'blocks': [
		{
			'id': 1,
			'type': 'TEXT',
			'title': 'Заголовок цього блоку',
			'paragraphs': [
				'Програма, яку традиційно називають \'Hello, world!\', дуже проста. Вона виводить кудись фразу \'Hello, world!\', або подібне, засобами деякої мови.',
				'JavaScript - це мова, програми якою можна виконувати в різних середовищах. У нашому випадку йдеться про браузери і серверну платформу Node.js. Якщо досі ви не написали ні стрічки коду на JS і читаєте цей текст у браузері на стаціонарному комп\'ютері це означає, що ви буквально за кілька секунд від своєї першої JavaScript-програми.',
				'Існують інші способи запуску JS-коду в браузері. Так, якщо говорити про звичайне використання програм на JavaScript, вони завантажуються в браузер для забезпечення роботи веб-сторінок. Зазвичай код оформлюють у вигляді окремих файлів з розширенням .js, які підключають до веб -Сторінок, але програмний код можна включати і безпосередньо в код сторінки.Все це робиться за допомогою тега <script>.Коли браузер виявляє такий код, він виконує його.Деталі про тег script можна подивитися на сайті w3school.com. приклад, що демонструє роботу з веб-сторінками JavaScript, наведений на цьому ресурсі. Цей приклад можна запустити і засобами цього ресурсу (шукайте кнопку Try it Yourself), але ми надійдемо трохи інакше. , і додамо до нього наступний код:'
			]
		},
		{
			'id': 4,
			'type': 'CODE',
			'code': '<!DOCTYPE html>\n<html>\n  <body>\n    <p id=\'hello\'></p>\n\n    <script>\n      document.getElementById(\'hello\').innerHTML = \'Hello, world!\';\n    </script>\n  </body>\n</html>;'
		},
		{
			'id': 5,
			'type': 'TEXT',
			'title': 'Заголовок цього блоку',
			'paragraphs': [
				'Програма, яку традиційно називають \'Hello, world!\', дуже проста. Вона виводить кудись фразу \'Hello, world!\', або подібне, засобами деякої мови.',
				'Існують інші способи запуску JS-коду в браузері. Так, якщо говорити про звичайне використання програм на JavaScript, вони завантажуються в браузер для забезпечення роботи веб-сторінок. Зазвичай код оформлюють у вигляді окремих файлів з розширенням .js, які підключають до веб -Сторінок, але програмний код можна включати і безпосередньо в код сторінки.Все це робиться за допомогою тега <script>.Коли браузер виявляє такий код, він виконує його.Деталі про тег script можна подивитися на сайті w3school.com. приклад, що демонструє роботу з веб-сторінками JavaScript, наведений на цьому ресурсі. Цей приклад можна запустити і засобами цього ресурсу (шукайте кнопку Try it Yourself), але ми надійдемо трохи інакше. , і додамо до нього наступний код:'
			]
		},
		{
			'id': 2,
			'type': 'IMAGE',
			'src': 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
			'title': 'Рисунок 1 - скріншот сайту'
		},
		{
			'id': 3,
			'type': 'CODE',
			'code': 'const path = require(\'path\');\n\nconst server = jsonServer.create();\n\nconst router = jsonServer.router(path.resolve(__dirname, \'db.json\'));\n\nserver.use(jsonServer.defaults({}));\nserver.use(jsonServer.bodyParser);'
		},
		{
			'id': 7,
			'type': 'TEXT',
			'title': 'Заголовок цього блоку',
			'paragraphs': [
				'JavaScript - це мова програмування, на якій можна виконувати програми в різних середовищах. У нашому випадку мова йде про браузери та серверну платформу Node.js. Якщо до цього часу ви не писали ні рядка коду на JS та читаєте цей текст в браузері на стаціонарному комп\'ютері, це означає, що ви буквально за декілька секунд від своєї першої JavaScript-програми.',
				'Існують і інші способи запуску JS-коду в браузері. Наприклад, якщо говорити про звичайне використання програм на JavaScript, вони завантажуються в браузер для забезпечення роботи веб-сторінок. Зазвичай код оформляють у вигляді окремих файлів з розширенням .js, які підключають до веб-сторінок, але програмний код можна включати і безпосередньо в код сторінки. Все це робиться за допомогою тегу <script>. Коли браузер виявляє такий код, він виконує його. Деталі про тег script можна переглянути на сайті w3school.com. Зокрема, розглянемо приклад, що демонструє роботу з веб-сторінкою за допомогою JavaScript, наведений на цьому ресурсі. Цей приклад можна запустити за допомогою цього ресурсу (шукайте кнопку Try it Yourself), але ми зробимо це трохи інакше. А саме, створимо в якомусь текстовому редакторі (наприклад - в VS Code або в Notepad++) новий файл, який назвемо hello.html, та додамо до нього наступний код:'
			]
		},
		{
			'id': 8,
			'type': 'IMAGE',
			'src': 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
			'title': 'Рисунок 1 - скріншот сайту'
		},
		{
			'id': 9,
			'type': 'TEXT',
			'title': 'Заголовок цього блоку',
			'paragraphs': [
				'JavaScript - це мова програмування, на якій можна виконувати програми в різних середовищах. У нашому випадку мова йде про браузери та серверну платформу Node.js. Якщо до цього часу ви не писали ні рядка коду на JS та читаєте цей текст в браузері на стаціонарному комп\'ютері, це означає, що ви буквально за декілька секунд від своєї першої JavaScript-програми.'
			]
		}
	]
}

const articles = new Array(6).fill(0).map((_, index) => ({ ...article, id: index }))
const entities: any = {}
const ids: any = []

articles.forEach(article => {
	entities[String(article.id)] = article
	ids.push(article.id)
})


export default {
	title: 'pages/ArticlesPage',
	component: ArticlesPage,
	argTypes: {},
} as ComponentMeta<typeof ArticlesPage>

const Template: ComponentStory<typeof ArticlesPage> = (args) => < ArticlesPage { ...args } />

export const Basic: Story = Template.bind({})
Basic.args = {}
Basic.decorators = [StoreDecorator({
	articlesInfiniteList: {
		isLoading: false,
		entities: articles as any,
		ids: ids as any
	}
})]

export const Loading: Story = Template.bind({})
Loading.args = {}
Loading.decorators = [StoreDecorator({})]