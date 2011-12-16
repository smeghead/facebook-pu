FILES = README.md icon.png manifest.json content-script.js

.PHONY: dist
default:

dist:
	rm -rf dist
	mkdir -p dist/facebook-pu
	cp $(FILES) dist/facebook-pu
	cd dist && zip -r facebook-pu.zip facebook-pu
