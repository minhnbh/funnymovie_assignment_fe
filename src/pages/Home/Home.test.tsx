import { renderWrapper } from "@test/renderWrapper";
import Home from ".";
import { MovieServices } from "@services/movie.service";
import { screen } from "@testing-library/react";
import { AUTH_USER_INFO } from "@utils/authStorage";

describe("Should test Home screen", () => {
  it("Should render Home screen", async () => {
    jest.useFakeTimers();
    window.sessionStorage.setItem(
      AUTH_USER_INFO,
      JSON.stringify({ fullName: "Minh" })
    );
    const getMovies = jest.spyOn(MovieServices, "getMovies").mockResolvedValue({
      status: 200,
      data: {
        data: [
          {
            _id: "_id",
            title: "Title",
            description: "Description",
            url: "url",
            sharedBy: "Minh",
            like: 0,
            dislike: 0,
          },
        ],
      },
    } as any);

    renderWrapper(<Home />);

    jest.advanceTimersByTime(1000);

    expect(getMovies).toBeCalled();
    expect(await screen.findByText("Title")).toBeInTheDocument();
    expect(await screen.findByText("Description")).toBeInTheDocument();
  });
});
