import { renderWrapper } from "@test/renderWrapper";
import Share from ".";
import { fireEvent, screen } from "@testing-library/react";
import { ShareServices } from "@services/share.service";

describe("Should test Share screen", () => {
  it("Should render share form", () => {
    const spyShare = jest
      .spyOn(ShareServices, "share")
      .mockResolvedValue({ status: 200 } as any);

    renderWrapper(<Share />);
    const mockUrl = "https://www.youtube.com/watch?v=iEuF-pzdiGE";
    expect(screen.getByText("Share a Youtube movie")).toBeInTheDocument();

    const urlInput = screen.getByRole("textbox", { name: "youtubeUrl" });
    fireEvent.change(urlInput, {
      target: {
        value: mockUrl,
      },
    });

    const shareButton = screen.getByRole("button", { name: "Share" });
    shareButton.click();

    expect(spyShare).toBeCalledWith(mockUrl);
  });
});
