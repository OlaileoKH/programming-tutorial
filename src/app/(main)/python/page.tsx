// import GoToTopButton from '@/components/button';
import CodeBlock from '@/components/CodeBlock';
// import ExpandableSection from '@/components/ExpandableSection';
import CommentSection from '@/components/CommentSection';
import ExpandableSection from '@/components/ExpandableSection';
import CodeEditor from '@/components/CodeEditor';

export default function PythonPage() {
    return (
      <div className="text-black font-mono">

        <div className="container mx-auto p-4">
            <ExpandableSection title="Python Code Editor (You can edit your code here....)">
            <CodeEditor />
            </ExpandableSection>
        </div>
        <ul className="ml-12 mr-20 list-disc">
        <h1 className="text-2xl font-bold mb-4 flex justify-center items-center">&#x1F40D;Python Tutorial Series</h1>
        <p>Welcome to the Python tutorial section. Here you will learn the basics of Python programming.</p>
        <br></br>
        <ExpandableSection title='Introduction to Python and Basics'>
        <hr className="my-4 border-t border-gray-500" />
          <h1 className="text-2xl  mb-4"><b>1. Introduction to Python</b></h1>
          <ul className="text-xl ml-12 mr-12 list-disc">
            <li><b> Applications of Python:</b>
              <ul className="ml-12 list-non">
                <li className=" relative pl-4 before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-transparent before:border before:border-gray-500 before:rounded-full">
                Python is a high-level, interpreted programming language.</li>
                <li className=" relative pl-4 before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-transparent before:border before:border-gray-500 before:rounded-full">
                It is easy to learn and widely used in engineering, data science, web development, and more.</li>
              </ul>
            </li>
            <li><b> Why Python for Engineers?</b>
              <ul className="text-xl ml-12 list-non">
                <li className=" relative pl-4 before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-transparent before:border before:border-gray-500 before:rounded-full">
                Python is versatile and has libraries for scientific computing, data analysis, and automation.</li>
                <li className=" relative pl-4 before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-transparent before:border before:border-gray-500 before:rounded-full">
                It is used in fields like robotics, AI, IoT, and simulations.</li>
              </ul>
            </li>
            <li><b> What is Python?</b>
              <ul className="text-xl ml-12 list-non">
                <li className=" relative pl-4 before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-transparent before:border before:border-gray-500 before:rounded-full">
                Data analysis (Pandas, NumPy).</li>
                <li className=" relative pl-4 before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-transparent before:border before:border-gray-500 before:rounded-full">
                Visualization (Matplotlib, Seaborn).</li>
                <li className=" relative pl-4 before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-transparent before:border before:border-gray-500 before:rounded-full">
                Machine learning (Scikit-learn, TensorFlow).</li>
                <li className=" relative pl-4 before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-transparent before:border before:border-gray-500 before:rounded-full">
                Automation and scripting.</li>

              </ul>
            </li>
          </ul>

          <hr className="my-4 border-t border-gray-500" />

          
          {/* setting up environment */}
          
          <h1 className="text-2xl  mb-4"><b>2. Setting Up the Environment </b></h1>
          <ul className="text-xl ml-12 mr-12 list-disc">
            <li><b> Install Python:</b>
              <ul className="ml-12 list-non">
                <li className=" relative pl-4 before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-transparent before:border before:border-gray-500 before:rounded-full">
                Download and install Python from python.org.</li>
                <li className=" relative pl-4 before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-transparent before:border before:border-gray-500 before:rounded-full">
                Ensure Python is added to the system PATH during installation.</li>
              </ul>
            </li>
            <li><b> Install an IDE/Text Editor:</b>
              <ul className="text-xl ml-12 list-non">
                <li className=" relative pl-4 before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-transparent before:border before:border-gray-500 before:rounded-full">
                Recommend using VS Code, PyCharm, or Jupyter Notebook.</li>
                <li className=" relative pl-4 before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-transparent before:border before:border-gray-500 before:rounded-full">
                Install VS Code and the Python extension.</li>
              </ul>
            </li>
            <li><b>Verify Installation:</b>
              <ul className="text-xl ml-12 list-non">
                <li className=" relative pl-4 before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-transparent before:border before:border-gray-500 before:rounded-full">
                Open a terminal or command prompt and type python --version to check the installed version.</li>
                <li className=" relative pl-4 before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-transparent before:border before:border-gray-500 before:rounded-full">
                Run a simple command like print<b>(&quot;Hello, World!&quot;)</b> in the Python interpreter.</li>
              </ul>
            </li>
          </ul>

          <hr className="my-4 border-t border-gray-500" />
          
          {/* First Program */}
          <h1 className="text-2xl  mb-4"><b>3. Writing Your First Python Program</b></h1>
          <ul className="text-xl ml-12 mr-12 list-disc">
            <li><b>Open the IDE or text editor and write a simple program.</b></li>
            <li><b> Explain the structure of a Python program:</b>
              <ul className="text-xl ml-12 mr-12 list-non">
                <li className="relative pl-4 before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-transparent before:border before:border-gray-500 before:rounded-full">
                No need for semicolons or curly braces.</li>
                <li className="relative pl-4 before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-transparent before:border before:border-gray-500 before:rounded-full">
                Indentation is important for defining blocks of code.</li>
              </ul>
            </li>
          </ul><br></br>
          <h1 className="text-xl"><b>Example:</b></h1>
          <CodeBlock
        language="python"
        code={`# This is a comment
print("Hello, World!")  # This prints "Hello, World!" to the console`}
        />

        <hr className="my-4 border-t border-gray-500" />

        <h1 className="text-2xl mb-4" ><b>4. Basic Syntax and Concepts</b></h1><br></br>
        <div className="text-xl">Topics to Cover:
         <ul className="text-xl ml-16 mr-12 list-decimal">
          <br></br>
          <li>
            Variables and Data Types:
            <ul className="text-xl ml-12 mr-12 list-non">
              <li className="relative pl-4 before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-transparent before:border before:border-gray-500 before:rounded-full">
              Variables store data.
              </li>
              <li className="relative pl-4 before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-transparent before:border before:border-gray-500 before:rounded-full">
              Python supports integers, floats, strings, and booleans.
              </li>
              <li className="relative pl-4 before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-transparent before:border before:border-gray-500 before:rounded-full">
              Example:</li>
              <CodeBlock
        language="python"
        code={`x = 10          # Integer
y = 3.14        # Float
name = "Alice"  # String
is_student = True  # Boolean`}
        />
              
            </ul>
          </li>
          <li>
          Input and Output:
            <ul className="text-xl ml-12 mr-12 list-non">
              <li className="relative pl-4 before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-transparent before:border before:border-gray-500 before:rounded-full">
              Use input() to take user input.
              </li>
              <li className="relative pl-4 before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-transparent before:border before:border-gray-500 before:rounded-full">
              Use print() to display output.
              </li>
              <li className="relative pl-4 before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-transparent before:border before:border-gray-500 before:rounded-full">
              Example:</li>
              <CodeBlock
        language="python"
        code={`name = input("Enter your name: ")
print(f"Hello, {name}!")`}
        />
              
            </ul>
          </li>
          <li>
          Basic Operators:
            <ul className="text-xl ml-12 mr-12 list-non">
              <li className="relative pl-4 before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-transparent before:border before:border-gray-500 before:rounded-full">
              Arithmetic operators: +, -, *, /, //, %, **.
              </li>
              <li className="relative pl-4 before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-transparent before:border before:border-gray-500 before:rounded-full">
              Comparison operators: ==, !=, &gt;, &lt;, &gt;=, &lt;=.
              </li>
              <li className="relative pl-4 before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-transparent before:border before:border-gray-500 before:rounded-full">
              Example:</li>
              <CodeBlock
        language="python"
        code={`a = 10
b = 3
print(a + b)  # Addition
print(a > b)  # Comparison`}
        />
              
            </ul>
          </li>


         </ul>
        </div>
      <hr className="my-4 border-t border-gray-500" />
        
      <h1 className="text-2xl mb-4" ><b>5. Hands-On Practice</b></h1><br></br>
      <div className="text-xl">
      <b>Give students simple exercises to practice what they’ve learned.</b><br></br>Exercises:
      <br></br>
          <ul className="ml-16 mr-12 list-decimal">
            <li>Write a program to add two numbers entered by the user.</li>
            <CodeBlock
        language="python"
        code={`num1 = float(input("Enter the first number: "))
num2 = float(input("Enter the second number: "))
sum = num1 + num2
print(f"The sum is: {sum}")`}
        />
            <li>Write a program to calculate the area of a rectangle.</li>
            <CodeBlock
        language="python"
        code={`length = float(input("Enter the length: "))
width = float(input("Enter the width: "))
area = length * width
print(f"The area of the rectangle is: {area}")`}
        />
            <li>Write a program to swap two variables.</li>
            <CodeBlock
        language="python"
        code={`a = 5
b = 10
print(f"Before swapping: a = {a}, b = {b}")
a, b = b, a
print(f"After swapping: a = {a}, b = {b}")`}
        />        
          </ul>
      </div>
      <hr className="my-4 border-t border-gray-500" />
      
      <h1 className="text-2xl mb-4" ><b>6. Recap and Q&A</b></h1>
        <ul className="text-xl ml-12 mr-12 list-disc">
            <li><b> Recap what was covered:</b>
              <ul className="text-xl ml-12 mr-12 list-non">
                <li className="relative pl-4 before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-transparent before:border before:border-gray-500 before:rounded-full">
                Introduction to Python.</li>
                <li className="relative pl-4 before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-transparent before:border before:border-gray-500 before:rounded-full">
                Setting up the environment.</li>
                <li className="relative pl-4 before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-transparent before:border before:border-gray-500 before:rounded-full">
                Writing and running a Python program.</li>
                <li className="relative pl-4 before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:w-2 before:h-2 before:bg-transparent before:border before:border-gray-500 before:rounded-full">
                Variables, data types, input/output, and operators.</li>
              </ul>
              
            </li>
        </ul>

      <hr className="my-4 border-t border-gray-500" />

      <h1 className="text-2xl mb-4"><b>Homework/Assignment</b></h1>
      <div className="text-xl"><b>Assign simple tasks to reinforce learning:</b></div>
      <ul className="text-xl ml-16 mr-12 list-decimal">
        <li>Write a program to calculate the area of a circle (area = πr²).</li>
        <li>Write a program to convert temperature from Celsius to Fahrenheit (F = (C * 9/5) + 32).</li>
        <li>Write a program to print your name, age, and address using input() and print().</li>
      </ul>
      <hr className="my-4 border-t border-gray-500" />
      </ExpandableSection>

        <ExpandableSection title='Control Structures and Functions '>
          <></>
        </ExpandableSection>
        </ul>
        <div>
              {/* Your existing content */}
              <CommentSection />
            </div>
      </div>
    );
  }