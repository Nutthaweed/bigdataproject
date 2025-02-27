
import { Provider } from  "./provider";
import "./globals.css";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Provider>
        <body>
          {children}
          </body>
      </Provider>
    </html>
  );
}
