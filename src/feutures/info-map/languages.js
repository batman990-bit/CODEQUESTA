export const LANGUAGES = [ 
    {
        id:"fortran" ,
        name:"FORTRAN",
        year: 1957,
        origin:"NEW YORK,USA" ,
        lat: 40.7,
        lng: -74.0,
        hasWorld: false,
        color: "#2bc5c8f",
        lore: 
          '<strong>Conceived by John Backus at IBM.</strong><br><br>' +
          '<strong>Coding Style:</strong><br>' +
          'Procedural and mathematical: Designed specifically for high-speed numerical calculations using formula translations.<br><br>' +
          '<strong>Where it is used:</strong><br>' +
          '• <strong>Scientific Computing:</strong> Powers aerospace engineering simulations and weather forecasting models.<br>' +
          '• <strong>Supercomputing:</strong> Executes heavy physics computations on early and modern mainframes.<br><br>' +
          '<strong>Why it is helpful:</strong><br>' +
          '• <strong>Raw Performance:</strong> Highly optimized for crunching large arrays of numbers fast.<br>' +
          '• <strong>Pioneer Status:</strong> Established the foundation for compiled programming languages.<br><br>' +
         '<strong>For more information : </strong> <br> <a href="https://en.wikipedia.org/wiki/Fortran" target="_blank" style="color: #4a3525" text-decoration: underline;">Wikipedia Link </a>' 
    },
    {
        id: "lisp",
        name: "LISP",
        year: 1958 ,
        origin :"Cambridge,USA",
        lat: 42.3,
        lng:-71.1,
        hasWorld: false,
        color:"#3a726c",
        lore: 
         '<strong>Conceived by John McCarthy at MIT.</strong><br><br>' +
          '<strong>Coding Style:</strong><br>' +
          'Functional and symbolic: Uses nested parenthesis trees and symbolic expressions to process code as data.<br><br>' +
          '<strong>Where it is used:</strong><br>' +
          '• <strong>Artificial Intelligence:</strong> Pioneered early AI research, expert systems, and automated theorem proving.<br>' +
          '• <strong>Text Editing:</strong> Extensively used to script and customize the Emacs environment.<br><br>' +
          '<strong>Why it is helpful:</strong><br>' +
          '• <strong>Flexibility:</strong> Introduced recursion, conditional statements, and dynamic typing.<br>' +
          '• <strong>Code-as-Data:</strong> Allows programs to inspect and modify their own structure on the fly.<br><br>' +
          '<strong>For more information :</strong> <br> <a href="https://en.wikipedia.org/wiki/Lisp_(programming_language)"  target="_blank" style="color: #4a3525" text-decoration: underline;">Wikipedia Link </a>'
    },
    {
        id: 'cobol',
        name: 'COBOL',
        year: 1959,
        origin: 'Washington DC,USA',
        lat: 38.9,
        lng:-77.0,
        hasWorld: false,
        color: '#005a9e',
        lore: 
         '<strong>Designed by CODASYL under Grace Hopper\'s influence.</strong><br><br>' +
          '<strong>Coding Style:</strong><br>' +
          'English-like and structured: Written using readable English sentences divided into strict administrative divisions.<br><br>' +
          '<strong>Where it is used:</strong><br>' +
          '• <strong>Banking & Finance:</strong> Powers core transaction processing across global financial institutions.<br>' +
          '• <strong>Government Systems:</strong> Manages state records, tax archives, and social security mainframes.<br><br>' +
          '<strong>Why it is helpful:</strong><br>' +
          '• <strong>High Reliability:</strong> Incredibly stable for long-term transactional record-keeping.<br>' +
          '• <strong>Self-Documenting:</strong> Code reads like plain English business instructions.<br><br>'+
          '<strong>For more information: </strong> <br> <a href="https://en.wikipedia.org/wiki/COBOL"  target="_blank" style="color: #4a3525" text-decoration: underline;">Wikipedia Link </a>'
    },
    {
        id:'basic',
        name:'BASIC',
        year: 1964,
        origin: 'Hanover,Germany',
        lat: 43.7 ,
        lng: -72.3 ,
        hasWorld: false,
        color: '#d46a2a',
        lore: 
          '<strong>Conceived by John Kemeny and Thomas Kurtz at Dartmouth.</strong><br><br>' +
          '<strong>Coding Style:</strong><br>' +
          'Sequential and simple: Straightforward line-numbered statements designed for effortless reading.<br><br>' +
          '<strong>Where it is used:</strong><br>' +
          '• <strong>Education:</strong> Introduced generations of students to computer programming.<br>' +
          '• <strong>Home Microcomputers:</strong> Powered the operating systems and games of 1980s personal computers.<br><br>' +
          '<strong>Why it is helpful:</strong><br>' +
          '• <strong>Beginner-Centric:</strong> Made programming accessible to non-science students.<br>' +
          '• <strong>Quick Learning Curve:</strong> Extremely fast to pick up and write your first script.<br><br>' +
          '<strong>For more information :</strong> <br> <a href="https://en.wikipedia.org/wiki/BASIC"  target="_blank" style="color: #4a3525" text-decoration: underline;">Wikipedia Link </a>'
    },
    {
        id:'c',
        name:'C',
        year: 1972 ,
        origin: 'Murray Hill,USA',
        lat: 40.7 ,
        lng: -74.4 ,
        hasWorld: true,
        title: 'C Kingdom',
        color: '#00599c',
        lore: 
         '<strong>Conceived by Dennis Ritchie at Bell Labs.</strong><br><br>' +
          '<strong>Coding Style:</strong><br>' +
          'Procedural and low-level: Gives programmers direct control over memory addresses using pointers.<br><br>' +
          '<strong>Where it is used:</strong><br>' +
          '• <strong>Operating Systems:</strong> Built the backbone of Unix, Linux, and Windows kernels.<br>' +
          '• <strong>Embedded Systems:</strong> Powers microcontrollers, hardware drivers, and IoT devices.<br><br>' +
          '<strong>Why it is helpful:</strong><br>' +
          '• <strong>Blazing Speed:</strong> Executes code with minimal overhead close to bare metal hardware.<br>' +
          '• <strong>Universal Syntax:</strong> Forms the structural foundation for C++, C#, Java, and JavaScript.<br><br>'+
          '<strong>For more information: </strong> <br> <a href="https://en.wikipedia.org/wiki/C_(programming_language)"  target="_blank" style="color: #4a3525" text-decoration: underline;">Wikipedia Link </a> '
    },
    {
        id:'sql',
        name:'SQL',
        year: 1974,
        origin: 'San Jose,USA',
        lat: 37.3 ,
        lng: -121.9 ,
        hasWorld: true,
        title: 'SQL Archives',
        color: '#e38c00',
        lore: 
         '<strong>Conceived by Donald Chamberlin and Raymond Boyce at IBM.</strong><br><br>' +
          '<strong>Coding Style:</strong><br>' +
          'Declarative and query-based: Tells the database *what* data to fetch rather than *how* to loop through it.<br><br>' +
          '<strong>Where it is used:</strong><br>' +
          '• <strong>Database Management:</strong> Queries relational tables in PostgreSQL, MySQL, and Oracle.<br>' +
          '• <strong>Business Intelligence:</strong> Pulls metrics and analytical reports for corporate dashboards.<br><br>' +
          '<strong>Why it is helpful:</strong><br>' +
          '• <strong>Standardized:</strong> Works universally across nearly all relational database engines.<br>' +
          '• <strong>Powerful Retrieval:</strong> Efficiently searches and joins massive structured datasets.<br><br>'+
          '<strong>For more information: </strong> <br> <a href="https://en.wikipedia.org/wiki/SQL"  target="_blank" style="color: #4a3525" text-decoration: underline;">Wikipedia Link </a>'
    },
    {
        id:'cpp',
        name:'C++',
        year: 1985 ,
        origin: 'Murray Hill,USA',
        lat: 41.1 ,
        lng: -74.15 ,
        hasWorld: true,
        title: 'C++ World',
        color: '#004482',
        lore: 
         '<strong>Conceived by Bjarne Stroustrup.</strong><br><br>' +
          '<strong>Coding Style:</strong><br>' +
          'Multi-paradigm: Adds object-oriented classes and templates on top of C high-speed hardware control.<br><br>' +
          '<strong>Where it is used:</strong><br>' +
          '• <strong>Game Development:</strong> Powers high-performance AAA game engines like Unreal Engine.<br>' +
          '• <strong>System Software:</strong> Builds web browsers, graphics editors, and financial trading platforms.<br><br>' +
          '<strong>Why it is helpful:</strong><br>' +
          '• <strong>Speed with Abstraction:</strong> Combines bare-metal speed with organized object structures.<br>' +
          '• <strong>Fine-Tuned Control:</strong> Advanced memory management for resource-intensive apps.<br><br>'+
          '<strong> For more information :</strong> <br> <a href="https://en.wikipedia.org/wiki/C++"  target="_blank" style="color: #4a3525" text-decoration: underline;">Wikipedia Link </a>'
    },
    {
        id:'perl',
        name:'PERL',
        year: 1987 ,
        origin: 'Glendale,CA,USA',
        lat: 34.1 ,
        lng: -118.2 ,
        hasWorld: false,
        color: '#004066',
        lore:
          '<strong>Conceived by Larry Wall.</strong><br><br>' +
          '<strong>Coding Style:</strong><br>' +
          'Pragmatic and expressive: Famous for powerful regular expressions and flexible text manipulation shortcuts.<br><br>' +
          '<strong>Where it is used:</strong><br>' +
          '• <strong>System Administration:</strong> Automates server tasks and batch configuration updates.<br>' +
          '• <strong>Text Processing:</strong> Parses, cleans, and transforms massive log files.<br><br>' +
          '<strong>Why it is helpful:</strong><br>' +
          '• <strong>Regex Master:</strong> Unmatched ability to search, match, and replace complex string patterns.<br>' +
          '• <strong>Flexible Philosophy:</strong> Follows the motto "Theres more than one way to do it."<br><br>' +
          '<strong>For more information: </strong> <br> <a href="https://en.wikipedia.org/wiki/perl"  target="_blank" style="color: #4a3525" text-decoration: underline;">Wikipedia Link </a>'
    },
    {
        id:'python',
        name:'PYTHON',
        year: 1991 ,
        origin: 'Amsterdam,Netherlands',
        lat: 52.36 ,
        lng: 4.9 ,
        hasWorld: true,
        title: 'Python WORLD',
        color: '#3572a5',
        lore: 
         '<strong>Conceived by Guido van Rossum.</strong><br><br>' +
          '<strong>Coding Style:</strong><br>' +
          'Flexible and versatile: Lets you write step-by-step instructions or group things into objects to solve problems easily.<br><br>' +
          '<strong>Where it is used:</strong><br>' +
          '• <strong>Artificial Intelligence:</strong> Powers smart AI models and tools like ChatGPT.<br>' +
          '• <strong>Data Science:</strong> Analyzes data, calculates trends, and builds graphs.<br>' +
          '• <strong>Websites:</strong> Builds backends for platforms like Instagram and YouTube.<br>' +
          '• <strong>Automation:</strong> Automates repetitive tasks like bulk file sorting.<br><br>' +
          '<strong>Why it is helpful:</strong><br>' +
          '• <strong>Beginner-Friendly:</strong> Clear, English-like syntax makes it easy to read and learn.<br>' +
          '• <strong>Batteries-Included:</strong> Comes with ready-to-use built-in tools for almost any project.<br>' +
          '• <strong>High Demand:</strong> One of the most popular languages used by top tech companies worldwide.<br><br>'+
          '<strong>For more information :</strong> <br>  <a href="https://en.wikipedia.org/wiki/Python_(programming_language)"  target="_blank" style="color: #4a3525" text-decoration: underline;">Wikipedia Link </a>'
    },
    {
        id:'html',
        name:'HTML',
        year: 1993 ,
        origin: 'Geneva,Switzerland',
        lat: 46.2 ,
        lng: 6.1 ,
        hasWorld: true,
        title: 'HTML WORLD',
        color: '#e34f26',
        lore: 
         '<strong>Conceived by Tim Berners-Lee at CERN.</strong><br><br>' +
          '<strong>Coding Style:</strong><br>' +
          'Markup-based: Uses structural tags and nested elements to organize document content and hierarchy.<br><br>' +
          '<strong>Where it is used:</strong><br>' +
          '• <strong>Web Development:</strong> Forms the essential structural backbone of every website on the internet.<br>' +
          '• <strong>Document Formatting:</strong> Structures hypermedia documents displayed across web browsers.<br><br>' +
          '<strong>Why it is helpful:</strong><br>' +
          '• <strong>Universal Standard:</strong> Recognized and interpreted natively by every web browser on Earth.<br>' +
          '• <strong>Intuitive Semantics:</strong> Clear tag hierarchy makes defining web page layout straightforward.<br><br>'+
          '<strong>For more information :</strong> <br> <a href="https://en.wikipedia.org/wiki/HTML"  target="_blank" style="color: #4a3525" text-decoration: underline;">Wikipedia Link </a>'
    },
    {
        id:'css',
        name:'CSS',
        year: 1996 ,
        origin: 'Waltham,USA',
        lat: 42.37 ,
        lng: -71.24 ,
        hasWorld: true,
        title: 'CSS WORLD',
        color: '#264de4',
        lore: 
         '<strong>Proposed by Håkon Wium Lie.</strong><br><br>' +
          '<strong>Coding Style:</strong><br>' +
          'Rule-based styling: Applies cascading design rules and visual layouts separate from HTML content.<br><br>' +
          '<strong>Where it is used:</strong><br>' +
          '• <strong>Web Styling:</strong> Controls colors, typography, and responsive layouts across desktop and mobile screens.<br>' +
          '• <strong>UI Animations:</strong> Powers smooth visual transitions, hover states, and dynamic interface motion.<br><br>' +
          '<strong>Why it is helpful:</strong><br>' +
          '• <strong>Separation of Concerns:</strong> Keeps visual design decoupled from the underlying document structure.<br>' +
          '• <strong>Responsive Design:</strong> Adapts layouts seamlessly to any screen size or device orientation.<br><br>'+
          '<strong>For more information: </strong> <br> <a href="https://en.wikipedia.org/wiki/CSS"  target="_blank" style="color: #4a3525" text-decoration: underline;">Wikipedia Link </a>'
    },
    {
        id:'ruby',
        name:'RUBY',
        year: 1995 ,
        origin: 'Matsue,Japan',
        lat: 35.4 ,
        lng: 133.0 ,
        hasWorld:false,
        color: '#701516',
        lore: 
         '<strong>Conceived by Yukihiro Matsumoto (Matz).</strong><br><br>' +
          '<strong>Coding Style:</strong><br>' +
          'Pure object-oriented: Everything is an object, wrapped in clean, elegant, developer-friendly syntax.<br><br>' +
          '<strong>Where it is used:</strong><br>' +
          '• <strong>Web Frameworks:</strong> Powers full-stack web applications through the Ruby on Rails framework.<br>' +
          '• <strong>Prototyping:</strong> Enables rapid development of Minimum Viable Products (MVPs) for startups.<br><br>' +
          '<strong>Why it is helpful:</strong><br>' +
          '• <strong>Developer Happiness:</strong> Designed to make programming enjoyable, intuitive, and productive.<br>' +
          '• <strong>Expressive Code:</strong> Reads naturally, closely resembling plain English sentences.<br><br>'+
          '<strong>For more information :</strong> <br> <a href="https://en.wikipedia.org/wiki/Ruby_(programming_language)"  target="_blank" style="color: #4a3525" text-decoration: underline;">Wikipedia Link </a>'
    },
    {
        id:'java',
        name:'JAVA',
        year: 1995 ,
        origin: 'San Francisco,USA',
        lat:37.5 ,
        lng: -122.2 ,
        hasWorld: true,
        title: 'JAVA WORLD',
        color: '#b07219',
        lore: 
         '<strong>Conceived by James Gosling at Sun Microsystems.</strong><br><br>' +
          '<strong>Coding Style:</strong><br>' +
          'Strongly-typed object-oriented: Enforces strict class structures and robust architectural patterns.<br><br>' +
          '<strong>Where it is used:</strong><br>' +
          '• <strong>Enterprise Backends:</strong> Powers large-scale corporate banking servers and cloud-native applications.<br>' +
          '• <strong>Mobile Apps:</strong> Formed the primary foundation for native Android operating system application development.<br><br>' +
          '<strong>Why it is helpful:</strong><br>' +
          '• <strong>Portability:</strong> "Write Once, Run Anywhere" capability powered by the Java Virtual Machine (JVM).<br>' +
          '• <strong>Enterprise Reliability:</strong> Proven security and long-term stability for massive corporate systems.<br><br>'+
          '<strong>For more information :</strong> <br> <a href="https://en.wikipedia.org/wiki/Java_(programming_language)"  target="_blank" style="color: #4a3525" text-decoration: underline;">Wikipedia Link </a>'
    },
    {
        id:'javascript',
        name:'JAVASCRIPT',
        year: 19995  ,
        origin: 'Mountain View,USA',
        lat: 37.3 ,
        lng: -121.95 ,
        hasWorld: true,
        title: 'JAVASCRIPT WORLD',
        color: '#f1e05a',
        lore: 
         '<strong>Conceived by Brendan Eich at Netscape.</strong><br><br>' +
          '<strong>Coding Style:</strong><br>' +
          'Asynchronous and multi-paradigm: Combines event-driven scripting with functional and object-oriented styles.<br><br>' +
          '<strong>Where it is used:</strong><br>' +
          '• <strong>Interactive Web:</strong> Powers responsive client-side animations, forms, and dynamic user interface components.<br>' +
          '• <strong>Full-Stack Servers:</strong> Runs high-performance backend infrastructure using Node.js.<br><br>' +
          '<strong>Why it is helpful:</strong><br>' +
          '• <strong>Ubiquity:</strong> Executes natively inside every modern web browser worldwide without plugins.<br>' +
          '• <strong>Full-Stack Versatility:</strong> Allows developers to build both frontend and backend systems using a single language.<br><br>'+
          '<strong>For more information :</strong> <br> <a href="https://en.wikipedia.org/wiki/JavaScript"  target="_blank" style="color: #4a3525" text-decoration: underline;">Wikipedia Link </a>'
    },
    {
        id:'php',
        name:'PHP',
        year: 1995 ,
        origin: 'Toronto,Canada',
        lat: 43.6 ,
        lng: -79.3 ,
        hasWorld: false,
        color: '#4f5d95',
        lore: 
         '<strong>Conceived by Rasmus Lerdorf.</strong><br><br>' +
          '<strong>Coding Style:</strong><br>' +
          'Server-side scripting: Designed to embed dynamic code directly inside HTML web pages.<br><br>' +
          '<strong>Where it is used:</strong><br>' +
          '• <strong>Content Management:</strong> Powers WordPress, which runs over 40% of all websites on the web.<br>' +
          '• <strong>E-Commerce:</strong> Drives popular online shopping platforms like WooCommerce and Magento.<br><br>' +
          '<strong>Why it is helpful:</strong><br>' +
          '• <strong>Web-First Design:</strong> Built specifically for seamless database integration and server-side rendering.<br>' +
          '• <strong>Easy Hosting:</strong> Supported universally by nearly every web hosting provider on the internet.<br><br>'+
          '<strong>For more information :</strong> <br> <a href="https://en.wikipedia.org/wiki/PHP"  target="_blank" style="color: #4a3525" text-decoration: underline;">Wikipedia Link </a>'
    },
    {
        id:'csharp',
        name:'C#',
        year: 2000 ,
        origin: 'Redmond,USA',
        lat: 47.6 ,
        lng: -122.1 ,
        hasWorld: true,
        title: 'C# WORLD',
        color: '#178600',
        lore: 
         '<strong>Conceived by Anders Hejlsberg at Microsoft.</strong><br><br>' +
          '<strong>Coding Style:</strong><br>' +
          'Modern object-oriented: Strongly-typed syntax blending C++ power with rapid developer productivity features.<br><br>' +
          '<strong>Where it is used:</strong><br>' +
          '• <strong>Game Development:</strong> Primary scripting and development language for the Unity game engine.<br>' +
          '• <strong>Enterprise Software:</strong> Builds robust Windows desktop applications, cloud services, and enterprise APIs.<br><br>' +
          '<strong>Why it is helpful:</strong><br>' +
          '• <strong>Great Tooling:</strong> Fully supported by Visual Studio and the expansive .NET ecosystem.<br>' +
          '• <strong>Type Safety:</strong> Catches potential errors early through robust compile-time type checks.<br><br>'+
          '<strong>For more information :</strong> <br> <a href="https://en.wikipedia.org/wiki/C_Sharp_(programming_language)"  target="_blank" style="color: #4a3525" text-decoration: underline;">Wikipedia Link </a>'
    },
    {
        id:'go',
        name:'GO',
        year: 2009 ,
        origin: 'Mountain View,USA',
        lat: 37.4 ,
        lng: -121.75  ,
        hasWorld: false,
        color: '#00add8',
        lore: 
         '<strong>Conceived at Google by Robert Griesemer, Rob Pike, and Ken Thompson.</strong><br><br>' +
          '<strong>Coding Style:</strong><br>' +
          'Clean and concurrent: Minimalist procedural syntax with built-in lightweight concurrency primitives.<br><br>' +
          '<strong>Where it is used:</strong><br>' +
          '• <strong>Cloud Infrastructure:</strong> Powers core cloud-native tools like Docker and Kubernetes.<br>' +
          '• <strong>Microservices:</strong> Handles high-throughput backend networking, APIs, and distributed systems.<br><br>' +
          '<strong>Why it is helpful:</strong><br>' +
          '• <strong>Lightning Fast:</strong> Compiles directly into native machine code in seconds.<br>' +
          '• <strong>Easy Concurrency:</strong> Goroutines make managing thousands of simultaneous tasks effortless.<br><br>'+
          '<strong>For more information: </strong> <br> <a href="https://en.wikipedia.org/wiki/Go_(programming_language)"  target="_blank" style="color: #4a3525" text-decoration: underline;">Wikipedia Link </a>'
    },
    {
        id:'rust',
        name:'Rust',
        year: 2010 ,
        origin: 'SAn Francisco',
        lat: 37.7 ,
        lng: -122.4 ,
        hasWorld: true,
        title: 'RUST WORLD',
        color: '#dea584',
        lore: 
         '<strong>Conceived by Graydon Hoare at Mozilla.</strong><br><br>' +
          '<strong>Coding Style:</strong><br>' +
          'Safety-focused systems code: Enforces strict compile-time ownership and memory borrowing rules.<br><br>' +
          '<strong>Where it is used:</strong><br>' +
          '• <strong>Systems Programming:</strong> Builds secure browser components, operating system modules, and drivers.<br>' +
          '• <strong>High-Speed Engines:</strong> Powers WebAssembly modules and high-performance game engines.<br><br>' +
          '<strong>Why it is helpful:</strong><br>' +
          '• <strong>Memory Safety:</strong> Prevents null pointer dereferences and data races without needing a garbage collector.<br>' +
          '• <strong>Fearless Concurrency:</strong> Guarantees thread safety at compile time, eliminating race conditions.<br><br>'+
          '<strong>For more information :</strong> <br> <a href="https://en.wikipedia.org/wiki/Rust_(programming_language)"  target="_blank" style="color: #4a3525" text-decoration: underline;">Wikipedia Link </a>'
    },
    {
        id:'kotlin',
        name:'KOTLIN',
        year: 2011 ,
        origin: 'St. Petersburg,Russia',
        lat: 59.9 ,
        lng: 30.3 ,
        hasWorld: false,
        color: '#a97bfc',
        lore: 
         '<strong>Developed by JetBrains.</strong><br><br>' +
          '<strong>Coding Style:</strong><br>' +
          'Concise and modern: Expressive syntax designed to eliminate boilerplate code while remaining fully Java-compatible.<br><br>' +
          '<strong>Where it is used:</strong><br>' +
          '• <strong>Android Apps:</strong> The official and preferred programming language for modern Android mobile development.<br>' +
          '• <strong>Server-Side Backends:</strong> Builds scalable web applications running on the JVM.<br><br>' +
          '<strong>Why it is helpful:</strong><br>' +
          '• <strong>Null Safety:</strong> Built-in type system safeguards eliminate dreaded NullPointerExceptions.<br>' +
          '• <strong>Interoperability:</strong> Works seamlessly alongside existing Java codebases and libraries.<br><br>'+
          '<strong>For more information: </strong> <br> <a href="https://en.wikipedia.org/wiki/Kotlin"  target="_blank" style="color: #4a3525" text-decoration: underline;">Wikipedia Link </a>'
    },
    {
        id:'typescript',
        name:'TYPESCRIPT',
        year: 2012 ,
        origin: 'Redmond,USA',
        lat: 48.0 ,
        lng: -121.9 ,
        hasWorld: true,
        title: 'TYPESCRIPT WORLD',
        color: '#3178c6',
        lore: 
         '<strong>Conceived by Anders Hejlsberg at Microsoft.</strong><br><br>' +
          '<strong>Coding Style:</strong><br>' +
          'Strongly-typed superset: Adds optional static types and advanced interfaces on top of JavaScript.<br><br>' +
          '<strong>Where it is used:</strong><br>' +
          '• <strong>Large Web Apps:</strong> Powers massive enterprise frontend applications in React, Angular, and Vue.<br>' +
          '• <strong>Backend Services:</strong> Scales robust enterprise microservices built with Node.js.<br><br>' +
          '<strong>Why it is helpful:</strong><br>' +
          '• <strong>Early Error Catching:</strong> Catches bugs and type mismatches in your editor before the code runs.<br>' +
          '• <strong>Supercharged IDEs:</strong> Enables advanced autocompletion, refactoring, and code navigation.<br><br>'+
          '<strong>For more information :</strong> <br> <a href="https://en.wikipedia.org/wiki/TypeScript"  target="_blank" style="color: #4a3525" text-decoration: underline;">Wikipedia Link </a>'
    },
]