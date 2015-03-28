BABEL = node_modules/.bin/babel

.PHONY: build clean dist

build:
	$(BABEL) src/ --modules common --out-dir dist

clean:
	rm -rf dist

dist: clean build
	make clean
	make build
