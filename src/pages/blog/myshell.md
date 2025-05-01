---
title: "MyShell"
description: "A simple custom command-line shell written in C with support for piping, redirection, and built-in commands"
pubDate: "2025-05-01"
heroImage: "/MyShell-portfolio.png"
---

# MyShell

*A simple custom command-line shell written in C, supporting built-in commands, piping, redirection, and batch execution.*

*Published: May 1, 2025*

MyShell provides a lightweight and reliable way to run shell commands either interactively or through batch scripts. It’s designed to be robust, clear in error reporting, and extensible for advanced command-line behavior.

---

## 📎 GitHub Repository

🔗 [View the source code on GitHub](https://github.com/graceieg/MyShell)

---

## 📈 Overview

MyShell replicates basic Unix shell functionality, letting users execute both built-in and external commands with features like:

1. Interactive and batch command modes
2. Redirection of input and output using `<` and `>`
3. Piping between commands with `|`
4. Wildcard expansion for flexible file matching
5. Graceful error handling for invalid inputs and syntax

---

## 🧠 Technologies Used

- **C**
- **POSIX system calls**: `fork()`, `execvp()`, `dup2()`
- **GNU Make** for compilation
- **Standard libraries**: `stdio.h`, `stdlib.h`, `string.h`, `unistd.h`

---

## Features

- **Built-in Commands**: 
  - `cd`: Change directory
  - `pwd`: Print working directory
  - `exit`: Exit shell
  - `which`: Locate executable in PATH

- **Redirection**: 
  - `command > output.txt`
  - `command < input.txt`
  - `command < input.txt > output.txt`

- **Piping**: 
  - `ls -l | grep .c | wc -l`

- **Wildcard Expansion**:
  - Supports `*.txt`, `file?.c`, etc.
  - Falls back to literal input if no match is found

- **Batch Mode**: 
  - Execute commands from a file with `./mysh commands.txt`

---

## ⚙️ How It Works

Each command is parsed and categorized as either:

- **Built-in**: Handled internally
- **External**: Forks a new process and uses `execvp()`

If redirection is detected, file descriptors are updated via `dup2()` before execution. Pipes use multiple forks and connect stdout of one command to stdin of the next.

---

## 🚀 Getting Started

### 📂 Folder Setup
<pre><code>
├── mysh.c
├── Makefile
├── README.md
├── batch.txt
└── output.txt
</code></pre>
---

## Command-Line Options

- Input is typed interactively or read from a file if one is provided:
  - `./mysh` launches the shell interactively
  - `./mysh commands.txt` runs a file of commands in batch mode

---

