def create_marketing_prompt(era, subject_name):
    # Mapping research tokens to the rendering engine
    era_tokens = {
        "VICTORIAN": "[INK_JITTER_1880][MACRO_FIDELITY_4K]",
        "WWII": "[GRAIN_CHECK_1950][NOIR_CHIA_1930]",
        "2026_PARADIGM": "[WAX_DEPTH_2026][LIQUID_GLASS_UI]"
    }
    
    if era not in era_tokens:
        raise ValueError(f"Era '{era}' not recognized. Must be one of {list(era_tokens.keys())}.")
        
    prompt = f"""
    Using Nano Banana Pro 2:
    STYLE: {era} Historiographic Reconstruction.
    SUBJECT: {subject_name} (Subject_Alpha Consistency).
    LIGHTING: Rembrandt-patch chiaroscuro.
    TEXTURE: {era_tokens[era]}.
    LOCALISATION: en-GB (Spelling: Centre, Theatre).
    CANON: Include Transport Font for signage.
    """
    return prompt

# Example Usage:
if __name__ == "__main__":
    prompt = create_marketing_prompt("WWII", "Harry Wellspring")
    print(prompt)
