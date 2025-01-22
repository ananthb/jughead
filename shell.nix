{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  name = "jughead";

  buildInputs = with pkgs; [
    go
    hugo
    nodePackages.prettier
    prettier-plugin-go-template
  ];
}
