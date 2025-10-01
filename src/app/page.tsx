"use client";
import Image from "next/image";
import styles from "./page.module.css";
import FilledRoundedButton from "@shared/ui/buttons/icons-button/filled-rounded-button/ui/button";
import { CategoryBlock } from "@shared/ui/categories";
import { SwitchCategories } from "@shared/ui/switches";
import { FilledInput } from "@shared/ui/inputs";
import { useState } from "react";
import { MessageWithTail } from "@shared/ui/messages";
import { ChatInFeed } from "@widgets/chat";

export default function Home() {
  const [value, setValue] = useState<string | null>(null);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol>
          <li>
            Get started by editing <code>src/app/page.tsx</code>.
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className={styles.ctas}>
          <FilledRoundedButton
            icon="send"
            iconPosition="left"
            variant="primary"
            className={styles.button}
          />

          <CategoryBlock count={132}>Inbox</CategoryBlock>
          <SwitchCategories
            className={styles.switch}
            value="2"
            categories={[
              { title: "Inbox", count: 132, id: "1" },
              { title: "Unread", id: "2" },
            ]}
          />

          <ChatInFeed
            username="Developer"
            message="Message text from user which text something for u fpwemfpw"
            lastMessageTime={new Date().getSeconds().toString()}
            messageStatus="checked"
          />

          <FilledInput
            placeholder="Search"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />

          <MessageWithTail
            content="whats up?"
            sender="me"
            messageStatus="checked"
            type="lonely"
            date={new Date()}
          />
        </div>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
