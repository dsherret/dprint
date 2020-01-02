use super::*;
use dprint_core::*;
use swc_common::{BytePos};

pub fn format_text(file_path: &str, file_text: &str, config: &TypeScriptConfiguration) -> Result<String, String> {
    let mut parsed_source_file = parse_to_swc_ast(&file_path, &file_text)?;
    if !should_format_file(&mut parsed_source_file) {
        return Ok(file_text.into());
    }
    let print_items = parse(parsed_source_file, config.clone());

    return Ok(print(print_items, PrintOptions {
        // todo: more configuration
        indent_width: config.indent_width,
        max_width: config.line_width,
        is_testing: false,
        use_tabs: config.use_tabs,
        newline_kind: "\n",
    }));

    fn should_format_file(file: &mut ParsedSourceFile) -> bool {
        for comment in file.comments.leading_comments(get_search_position(&file)).iter() {
            if comment.text.contains("dprint-ignore-file") {
                return false;
            }
        }

        return true;

        fn get_search_position(file: &ParsedSourceFile) -> BytePos {
            if let Some(first_statement) = file.module.body.get(0) {
                first_statement.lo()
            } else {
                BytePos(0)
            }
        }
    }
}