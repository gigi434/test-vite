import { render, screen, waitFor } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { App } from "@/src/app";
import { test, expect, vi, beforeEach } from "vitest";

// useNavigateをモックする
const mockedUseNavigate = vi.fn();

// react-routerのuseNavigateをモックで上書きする
beforeEach(() => {
  vi.mock("react-router", () => {
    return {
      ...vi.importActual("react-router"), // for vitest
      useNavigate: () => mockedUseNavigate,
    };
  });
});

test("should first", async () => {
  // Render the component
  render(<App />);

  // Check for initial elements
  await waitFor(() => {
    expect(
      screen.getByRole("heading", { name: /Test Vite \+ React/i }),
    ).toBeInTheDocument();
  });
  expect(screen.getByAltText("react")).toBeInTheDocument();
  expect(
    screen.getByText(
      /Showcasing Best Practices For Building React Applications/i,
    ),
  ).toBeInTheDocument();

  // Check "Get started" button behavior
  const getStartedButton = screen.getByRole("button", { name: /Get started/i });
  expect(getStartedButton).toBeInTheDocument();
  userEvent.click(getStartedButton);
  await waitFor(() => expect(mockedUseNavigate).toHaveBeenCalledTimes(1));
  expect(mockedUseNavigate).toBeCalledWith("/app");

  // Check "Github Repo" button behavior
  const githubButton = screen.getByRole("button", { name: /Github Repo/i });
  expect(githubButton).toBeInTheDocument();
  const githubLink = screen.getByRole("link", { name: /Github Repo/i });
  expect(githubLink).toHaveAttribute(
    "href",
    "https://github.com/alan2207/bulletproof-react",
  );
});
