CSS_C=sass
CSS_FLAGS=
CSS_SRC=./
CSS_OUT=../css/
#CSS_TARGETS=$(patsubst $(CSS_SRC)/%.scss,%.css,$(wildcard $(CSS_SRC)/*.scss))
TARGETS=application.css
CSS_TARGETS=$(addprefix $(CSS_OUT),$(TARGETS))

CSS_FLAGS += -t compressed
CSS_FLAGS += --sourcemap=none

all: style

style: application.scss
	$(CSS_C) $(CSS_FLAGS) $? $(CSS_OUT)/style.css


css: $(CSS_TARGETS)

.SECONDEXPANSION:
%.css: $(CSS_SRC)/$$*.scss
	$(CSS_C) $(CSS_FLAGS) $? $(CSS_OUT)/$@

clean:
	rm -f $(CSS_OUT)/*
