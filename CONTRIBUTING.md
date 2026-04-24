# Contributing to Transport Stack

Welcome to the Transport Stack project! We're thrilled that you're considering contributing. Your involvement helps us build a robust, open, and interoperable mobility ecosystem. Whether you're fixing bugs, improving documentation, or developing new features, your contributions are invaluable.

## 🚦 Code of Conduct

We are committed to fostering a welcoming and inclusive environment. All contributors are expected to adhere to our [Code of Conduct](./CODE_OF_CONDUCT.md), which outlines our expectations for participant behavior.

---

## 🧭 How to Contribute

### 1. Fork and Clone the Repository

```bash
git clone https://github.com/your-username/transport-stack.git
cd transport-stack
```

### 2. Create a Feature Branch

```bash
git checkout -b feature/your-feature-name
```

### 3. Make Your Changes

Implement your changes. While we don't have formal coding standards yet, please follow general best practices for Python and maintain the existing structure.

### 4. Write Tests (If Applicable)

We are in the process of building a minimal test suite. Contributions that include basic tests are welcome and encouraged. You can use `pytest` for writing tests and `flake8` for style checks.

- Add tests in the `tests/` folder
- Example test command:
  ```bash
  pytest
  ```

### 5. Commit Your Changes

Follow [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/):

```bash
git commit -m "feat: add route planning API example"
```

### 6. Push to Your Fork

```bash
git push origin feature/your-feature-name
```

### 7. Submit a Pull Request (PR)

Go to the GitHub repository and submit a PR to the `main` branch. Please include:

- A clear description of your changes
- Links to related issues (if any)
- Tests or examples (if added)

> Your PR will be reviewed by a maintainer. We aim to respond within **3–5 business days**. Please make sure:
> - You've addressed any reviewer feedback
> - Lint and test commands run successfully (manually)

---

## 📚 Documentation Guidelines

- **API Specs**: Use OpenAPI (Swagger) YAML or JSON for any new API. Place them under `docs/api/`.
- **Guides**: Add user-facing docs to the `docs/` folder.
- **Changelog**: Add any notable changes to `CHANGELOG.md`.

---

## 🔐 Authentication Notes

If your changes involve any kind of token-based access, please document:
- Header requirements
- Token format
- OAuth2 flow, if applicable (example: `Authorization: Bearer <token>`)

---

## 📁 Project Structure

While we don’t enforce strict structure, try to:
- Keep modules self-contained
- Place new scripts in relevant service folders
- Ask if unsure

---

## 🧹 Style Guide

We recommend:
- Python: [PEP8](https://peps.python.org/pep-0008/)
- Run `flake8` locally before submitting a PR

> Help is welcome in formalizing our coding standards over time.

---

## 📄 License

All contributions will be licensed under the [Apache 2.0 License](./LICENSE).

---

## 🐛 Reporting Issues

When reporting issues, please use the appropriate issue template:

- [Bug Report](./issue-templates/bug.md): For reporting bugs or unexpected behavior
- [Feature Proposal](./issue-templates/feature-proposal.md): For suggesting new features or enhancements
- [Documentation](./issue-templates/documentation.md): For suggesting improvements to documentation

## 🔒 Security Vulnerabilities

If you discover a security vulnerability, please do NOT open an issue. Review our [Security Policy](./SECURITY.md) for instructions on responsible disclosure.

## 💬 Need Help?

- Open an issue in the repository
- Email us: [info@transportstack.in](mailto:info@transportstack.in)
