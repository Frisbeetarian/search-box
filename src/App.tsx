import styles from "@/App.module.css"; // Import the CSS module
import { Input } from "@/components/ui/input";
import { useState } from "react";

const articles = [
  {
    id: 1,
    title: "Understanding React Hooks",
    date: "2023-09-01",
    content:
      "React Hooks revolutionized how developers write functional components in React. They allow us to use state and other React features without writing a class. Before hooks, managing state and lifecycle in functional components was not possible. The introduction of useState and useEffect, among others, streamlined many tasks and provided more flexible ways of building components. Developers no longer need to switch between class components and functional components. Hooks also make code more reusable and concise by allowing custom hooks, which enable the abstraction of logic between components, resulting in cleaner and more maintainable code.",
  },
  {
    id: 2,
    title: "A Guide to CSS Flexbox",
    date: "2023-09-05",
    content:
      "Flexbox is a one-dimensional layout system in CSS that allows items to be arranged and aligned in a container. It was designed to replace float-based layouts that developers used in the past. Flexbox provides powerful alignment and distribution features, making it easier to create complex layouts. The 'flex' property can control how items grow, shrink, or remain static depending on the available space. Flexbox is highly responsive, meaning it adapts automatically to different screen sizes. Some key properties in Flexbox are 'justify-content', 'align-items', and 'flex-direction', all of which enable flexible control over the alignment and arrangement of elements.",
  },
  {
    id: 3,
    title: "JavaScript ES6 Features",
    date: "2023-09-10",
    content:
      "ECMAScript 6 (ES6) introduced a multitude of new features to JavaScript that improved the language significantly. Some of the key features include arrow functions, classes, template literals, and destructuring. Arrow functions provide a concise syntax and help with the 'this' keyword issue in traditional functions. ES6 classes brought an object-oriented approach to JavaScript, making it easier to define and extend classes. Template literals simplify string manipulation, while destructuring allows for easy extraction of values from arrays and objects. ES6 also introduced the 'let' and 'const' keywords, which addressed the issues of variable hoisting and immutability in JavaScript.",
  },
  {
    id: 4,
    title: "Mastering TypeScript",
    date: "2023-09-12",
    content:
      "TypeScript is a superset of JavaScript that adds static types, improving code reliability and tooling support. By using TypeScript, developers can catch type-related bugs during development, rather than at runtime. TypeScript is highly flexible, allowing developers to opt in to static typing progressively. With TypeScript, defining interfaces, enums, and generics can make your code more maintainable and predictable. The TypeScript compiler can transpile TypeScript code to plain JavaScript, which means it's compatible with existing JavaScript projects. The support for modern ECMAScript features, type inference, and code refactoring tools make TypeScript a great choice for large-scale JavaScript applications.",
  },
  {
    id: 5,
    title: "Next.js: The Future of Server-Side Rendering",
    date: "2023-09-15",
    content:
      "Next.js is a React framework that allows server-side rendering (SSR) and static site generation (SSG), making it an essential tool for building fast, scalable, and SEO-friendly web applications. With Next.js, developers can build dynamic web pages that load faster and rank better on search engines. It also supports dynamic imports, API routes, and image optimization out-of-the-box. One of the biggest advantages of Next.js is its ability to render pages on the server before sending them to the client, which greatly improves the performance of React applications. Additionally, its support for Incremental Static Regeneration (ISR) allows pages to be updated without rebuilding the entire site.",
  },
  {
    id: 6,
    title: "Exploring the New Features in ES2020",
    date: "2023-09-20",
    content:
      "ES2020 brought several new additions to JavaScript, including features like BigInt, optional chaining, and nullish coalescing. BigInt allows developers to work with numbers beyond the limitations of the 'number' type. Optional chaining simplifies deep property access by providing a safe and concise way to handle 'undefined' or 'null' properties, preventing runtime errors. The nullish coalescing operator (??) provides a default value when encountering 'null' or 'undefined' values, which is particularly useful when dealing with optional data. Other notable additions in ES2020 include dynamic imports, which make code-splitting easier, and globalThis, a unified way to reference the global object across different environments.",
  },
  {
    id: 7,
    title: "Building Scalable Applications with Node.js",
    date: "2023-09-25",
    content:
      "Node.js is a runtime built on Chrome's V8 engine that enables developers to build scalable network applications. By using non-blocking, event-driven architecture, Node.js can handle multiple connections concurrently, which makes it ideal for building high-performance server-side applications. With its vast ecosystem of open-source libraries through npm, Node.js has become the go-to choice for developers building web servers, APIs, and real-time applications. Its asynchronous nature allows developers to manage I/O operations effectively, while also being lightweight and efficient. Popular tools such as Express, Koa, and NestJS further extend the capabilities of Node.js by providing powerful frameworks for web development.",
  },
  {
    id: 8,
    title: "CSS Grid Layout: A Complete Guide",
    date: "2023-09-30",
    content:
      "CSS Grid Layout is a powerful two-dimensional layout system in CSS that allows developers to build web pages with grids. Unlike Flexbox, which is one-dimensional, CSS Grid can manage both rows and columns simultaneously, making it a highly flexible layout tool. It enables more complex layouts than traditional methods such as floats or positioning. By using properties like 'grid-template-columns' and 'grid-template-rows', developers can define explicit grid areas, which allows for easier management of elements on a webpage. Additionally, CSS Grid enables responsive designs that can dynamically adapt to different screen sizes without much effort.",
  },
  {
    id: 9,
    title: "Understanding Web Accessibility",
    date: "2023-10-01",
    content:
      "Web accessibility refers to designing websites and applications that are usable by people with a wide range of abilities and disabilities. Accessible websites ensure that individuals with visual, auditory, cognitive, and mobility impairments can navigate and interact with content effectively. Common practices include providing alt text for images, ensuring keyboard navigation for non-mouse users, and maintaining sufficient color contrast. Screen readers and other assistive technologies rely on semantic HTML and ARIA attributes to interpret and present content to users. By adhering to the Web Content Accessibility Guidelines (WCAG), developers can ensure their websites are accessible to everyone.",
  },
];

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchInputChange = (event: any) => {
    setSearchQuery(event.target.value);
  };

  const filteredArticles = articles.filter((article) => {
    return (
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.content.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  const truncate = (text: string, maxLength: number) => {
    return text.length > maxLength
      ? text.substring(0, maxLength) + "..."
      : text;
  };

  const highlightText = (text: string, searchTerm: string) => {
    if (!searchTerm) return text;

    const regex = new RegExp(`(${searchTerm})`, "gi");
    return text.split(regex).map((part, index) =>
      part.toLowerCase() === searchTerm.toLowerCase() ? (
        <span key={index} className={styles.highlight}>
          {part}
        </span>
      ) : (
        part
      ),
    );
  };

  return (
    <div className={styles.container}>
      <div className="w-1/2 my-10">
        <h1 className="font-bold mb-4">Search in articles</h1>
        <Input
          type="text"
          placeholder="Search..."
          className="py-5 text-lg"
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
        {searchQuery !== "" && <p>{filteredArticles.length} articles found</p>}
      </div>
      {articles.map((article) => (
        <div key={article.id} className={styles.article}>
          <h2 className={styles.title}>
            {highlightText(article.title, searchQuery)}
          </h2>
          <p className={styles.date}>{article.date}</p>
          <p className={styles.content}>
            {highlightText(truncate(article.content, 500), searchQuery)}
          </p>
        </div>
      ))}
    </div>
  );
}

export default App;
