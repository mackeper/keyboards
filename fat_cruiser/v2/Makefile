.PHONY: all build

OUTPUT_DIR := output
KICAD_FILE := output/pcbs/fat_cruiser.kicad_pcb
PAGE_SIZE := A4

# Detect OS
ifeq ($(OS),Windows_NT)
    DETECTED_OS := Windows
else
    UNAME_S := $(shell uname -s)
    ifeq ($(UNAME_S),Darwin)
        DETECTED_OS := macOS
    else
        DETECTED_OS := Linux
    endif
endif

all: build update_kicad_file stl

build:	
	@echo "\n=== Build ergogen ==="
	ergogen .

stl:
	@echo "\n=== Compile STLs ==="
	@for i in $(OUTPUT_DIR)/cases/*.jscad; do \
		openjscad "$$i" -o "$${i%.jscad}.stl"; \
	done

stl_v2:
	@for i in $(OUTPUT_DIR)/cases/*.jscad; do npx @jscad/cli "$i" -of stla; done

update_kicad_file:
	@echo "\n=== Update kicad file ==="
ifeq ($(DETECTED_OS),Windows)
	powershell -Command "(Get-Content $(KICAD_FILE)) -replace '\(paper \"A3\"\)', '(paper \"$(PAGE_SIZE)\")' | Set-Content $(KICAD_FILE)"
else ifeq ($(DETECTED_OS),macOS)
	sed -i '' 's/(paper "A3")/(paper "$(PAGE_SIZE)")/g' $(KICAD_FILE)
else
	sed -i 's/(paper "A3")/(paper "$(PAGE_SIZE)")/g' $(KICAD_FILE)
endif

plot_pdf_wsl:
	@echo "\n=== plot PDF ==="
	"/mnt/d/Program Files/KiCad/8.0/bin/kicad-cli.exe" pcb export pdf \
		--include-border-title \
		--layers "F.Cu,B.Cu,F.Fab,B.Fab,F.SilkS,B.SilkS,F.Mask,B.Mask,Dwgs.User,Edge.Cuts,Margin,F.CrtYd,B.CrtYd" \
		--output "./$(OUTPUT_DIR)/fat_cruiser.pdf" \
		--black-and-white \
        --define-var sketchpadsonfab=yes \
		--define-var drillshape=2 \
		--drill-shape-opt 2 \
		${KICAD_FILE}

update_kicad_pcbplotparams:
	@echo "\n=== Update kicad pcbplotparams ==="
	nvim -es -n -u NONE +':call search('pcbplotparams') | norm di(' +wq $(KICAD_FILE)

clean:
	@echo "\n=== Clean ==="
	rm -rf $(OUTPUT_DIR)
