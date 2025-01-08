{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  name = "jughead";

  buildInputs = with pkgs; [
    hugo
  ];
}
